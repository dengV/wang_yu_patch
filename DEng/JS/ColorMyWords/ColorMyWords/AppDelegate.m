
#import "AppDelegate.h"
#import <JavaScriptCore/JavaScriptCore.h>

@implementation AppDelegate {
    JSContext *_context;
    JSManagedValue *_colorPlugin;
}

@synthesize textView;

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
    [self.textView setAutomaticSpellingCorrectionEnabled:NO];
    [self.textView setContinuousSpellCheckingEnabled:NO];
    [self.textView.textStorage setDelegate:self];
    [self loadColorsPlugin];
    [self.textView setString:@"The quick brown fox jumped over the lazy red dog to eat the yellow hen in the blue coop."];
    [self refreshColors];
}

- (void)loadColorsPlugin
{    
    // Load the plugin script from the bundle.
    NSString *path = [[NSBundle mainBundle] pathForResource:@"colors" ofType:@"js"];
    NSString *pluginScript = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    
    _context = [[JSContext alloc] init];
    
    // We insert the AppDelegate into the global object so that when we call
    // -addManagedReference:withOwner: for the plugin object we're about to load
    // and pass the AppDelegate as the owner, the AppDelegate itself is reachable from
    // within JavaScript. If we didn't do this, the AppDelegate wouldn't be reachable
    // from JavaScript, and there wouldn't be anything keeping the plugin object alive.
    _context[@"AppDelegate"] = self;
    
    // Insert a block so that the plugin can create NSColors to return to us later.
    _context[@"makeNSColor"] = ^(NSDictionary *rgb){
        return [NSColor colorWithRed:[rgb[@"red"] floatValue] / 255.0f
                               green:[rgb[@"green"] floatValue] / 255.0f
                                blue:[rgb[@"blue"] floatValue] / 255.0f
                               alpha:1.0f];
    };
    
    JSValue *plugin = [_context evaluateScript:pluginScript];
    
    _colorPlugin = [JSManagedValue managedValueWithValue:plugin];
    [_context.virtualMachine addManagedReference:_colorPlugin withOwner:self];
    [self.window setDelegate:self];
}

- (void)unloadColorsPlugin
{
    [_context.virtualMachine removeManagedReference:_colorPlugin withOwner:self];
    _colorPlugin = nil;
    _context = nil;
}

- (void)windowWillClose:(NSNotification *)notification
{
    // We created a cycle when we inserted the AppDelegate into the JSContext
    // that the AppDelegate itself owns. When we close the window, we need to
    // break that cycle.
    [self unloadColorsPlugin];
}

- (IBAction)didClickShuffleButton:(id)sender
{
    JSValue *plugin = [_colorPlugin value];
    JSValue *shuffleFunction = plugin[@"shuffle"];
    [shuffleFunction callWithArguments:@[]];
    
    [self refreshColors];
}

- (IBAction)didClickResetButton:(id)sender
{
    JSValue *plugin = [_colorPlugin value];
    JSValue *resetFunction = plugin[@"reset"];
    [resetFunction callWithArguments:@[]];
    
    [self refreshColors];
}

- (IBAction)didClickReloadButton:(id)sender
{
    [self unloadColorsPlugin];
    [self loadColorsPlugin];
    [self refreshColors];
}

- (void)refreshColors
{
    // Get the words from the NSTextView.
    NSTextStorage *textStorage = [self.textView textStorage];
    NSString *textBody = [textStorage string];
    NSCharacterSet *whiteSpace = [NSCharacterSet whitespaceAndNewlineCharacterSet];
    NSArray *words = [textBody componentsSeparatedByCharactersInSet:whiteSpace];
    
    // Get the callback from the plugin.
    JSValue *plugin = [_colorPlugin value];
    JSValue *colorForWordFunction = plugin[@"colorForWord"];
    
    // Remove all the old formatting.
    [textStorage removeAttribute:NSBackgroundColorAttributeName range:NSMakeRange(0, [textBody length])];
    [textStorage removeAttribute:NSForegroundColorAttributeName range:NSMakeRange(0, [textBody length])];
    
    NSUInteger bodyOffset = 0;
    for (NSUInteger i = 0; i < [words count]; i++) {
        // Skip over whitespace at the end of words.
        while (bodyOffset < [textBody length] && [whiteSpace characterIsMember:[textBody characterAtIndex:bodyOffset]])
            bodyOffset++;
        
        NSString *word = [words objectAtIndex:i];
        NSRange wordRange = NSMakeRange(bodyOffset, [word length]);
        
        // Get the color from the plugin and highlight the word with it.
        NSColor *color = [[colorForWordFunction callWithArguments:@[word]] toObject];
        if (color) {
            [textStorage addAttribute:NSBackgroundColorAttributeName value:color range:wordRange];
            [textStorage addAttribute:NSForegroundColorAttributeName value:[NSColor whiteColor] range:wordRange];
        }
        
        bodyOffset += [word length];
    }
}

- (void)textStorageDidProcessEditing:(NSNotification *)aNotification
{
    [self refreshColors];
}

@end
