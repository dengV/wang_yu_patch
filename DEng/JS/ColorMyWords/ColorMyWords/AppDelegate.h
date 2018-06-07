
#import <Cocoa/Cocoa.h>

@interface AppDelegate : NSWindowController <NSApplicationDelegate, NSTextStorageDelegate, NSWindowDelegate>

@property IBOutlet NSTextView *textView;

@end
