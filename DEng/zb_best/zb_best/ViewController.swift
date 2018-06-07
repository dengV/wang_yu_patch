//
//  ViewController.swift
//  zb_best
//
//  Created by Jz D on 2018/6/7.
//  Copyright © 2018年 Jz D. All rights reserved.
//

import UIKit

import WebKit

class ViewController: UIViewController {

    
    var webView: WKWebView!
    
    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let myURL = URL(string: "http://m.ztbest.com")
        let myRequest = URLRequest(url: myURL!)
        webView.load(myRequest)
        
        
    }

    
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}


extension ViewController: WKUIDelegate{
    
    
}













