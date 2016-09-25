//
//  ViewController.m
//  ReactNativeDemo
//
//  Created by LiangHao on 16/8/25.
//  Copyright © 2016年 PhantomSmart. All rights reserved.
//

#import "ViewController.h"

#import <Masonry.h>
#import <RCTRootView.h>
#import <RCTBridge.h>

@interface ViewController () <RCTBridgeDelegate>

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    RCTBridge* rootBridge = [[RCTBridge alloc] initWithDelegate:self
                                                  launchOptions:nil];
    RCTRootView* rootView = [[RCTRootView alloc] initWithBridge:rootBridge
                                                     moduleName:@"iOSReactNativeDemo"
                                              initialProperties:nil];
    [self.view addSubview:rootView];
    [rootView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.edges.equalTo(self.view);
    }];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - RCTBridgeDelegate
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
    return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
}

@end
