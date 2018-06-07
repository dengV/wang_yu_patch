//
//  ViewController.m
//  Rain
//
//  Created by Jz D on 2018/6/6.
//  Copyright © 2018年 Jz D. All rights reserved.
//

#import "ViewController.h"
#import <JavaScriptCore/JavaScriptCore.h>

@interface ViewController()
@property (nonatomic, strong) JSContext * context;
@property (nonatomic, strong) JSManagedValue * colorPlugin;

@end



@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    // Do any additional setup after loading the view.
    
    //  [self testMethodOne];
    [self testMethodTwo];
}




- (void)loadColorsPlugin{
    // load the plugin script from the bundle
    NSString * path = [[NSBundle mainBundle] pathForResource:@"colors" ofType:@"js"];
    NSString * pluginScript = [NSString stringWithContentsOfFile: path encoding: NSUTF8StringEncoding error: nil];
    // 难怪说， JS 是 钩子， 插件， 动态化
    
    _context = [[JSContext alloc] init];
    
    // We insert the AppDelegate into the global object so that when we call
    // - addManagedReference: withOwner; for the plugin object we are about to load
    // and  pass the AppDelegate as the owner , the AppDelegate itself is reachable from
    // within JavaScript . If we did not do this , the AppDelegate would not be reachable
    // from JavaScript , and there would not be anything keeping the plugin object alive.
    
    _context[@"AppDelegate"] = self;
    
    // Insert a block , so that the plugin can create NSColors to return to us later.
    _context[@"makeNSColor"] = ^(NSDictionary * rgb){
        return [NSColor colorWithRed:[rgb[@"red"] floatValue] / 255.0f green: [rgb[@"green"] floatValue] / 255.0f blue: [rgb[@"blue"] floatValue] / 255.0f alpha: 1.0f ];
    };
    
    JSValue * plugin = [_context evaluateScript: pluginScript];
    _colorPlugin = [JSManagedValue managedValueWithValue: plugin];
    [_context.virtualMachine addManagedReference: _colorPlugin withOwner: self];
    //self.window
    
}



- (void)unloadColorsPlugin{
    [_context.virtualMachine removeManagedReference: _colorPlugin withOwner: self];
    _colorPlugin = nil;
    _context = nil;
    
}



- (void)windowWillClose: (NSNotification * ) notification{
    
    
    
}



- (IBAction)didClickShuffleButton:(NSButton *)sender {
    JSValue * plugin = [_colorPlugin value];
    JSValue * shuffleFunction = plugin[@"shuffle"];
    [shuffleFunction callWithArguments: @[]];
    // self

}
// Shuffle , 洗牌 ， 蒙混




- (IBAction)didClickResetButton:(NSButton *)sender {
    
    JSValue * plugin = [_colorPlugin value];
    JSValue * shuffleFunction = plugin[@"reset"];
    [shuffleFunction callWithArguments: @[]];
    // self
    
    
    
}



- (IBAction)didClickReloadButton:(NSButton *)sender {
    
    
    
    
    
    
}





- (void)setRepresentedObject:(id)representedObject {
    [super setRepresentedObject:representedObject];

    // Update the view, if already loaded.
}











- (void)testMethodOne{
    JSContext * context = [[JSContext alloc] init];
    JSValue * result = [context evaluateScript: @"2 + 2"];
    NSLog(@"2 + 2 = %d", [result toInt32]);
    
    
}



- (void)testMethodTwo{
    NSString * factorialScript = [self loadFactorialScript];
    JSContext * context = [[JSContext alloc] init];
    [context evaluateScript: factorialScript];
    
    JSValue * function = context[@"factorial"];
    JSValue * result = [function callWithArguments: @[@5] ];
    NSLog(@"factorial(5) = %d", [result toInt32]);
}


- (NSString *) loadFactorialScript{
    NSString * path = [[NSBundle mainBundle] pathForResource: @"factorial" ofType: @"js" ];
    NSString * pluginScript = [NSString stringWithContentsOfFile: path encoding: NSUTF8StringEncoding error: nil];
    return pluginScript;
}

@end
