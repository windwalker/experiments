试着玩了一下api-extractor这个工程，发现它用在已有工程中可能存在如下问题：
1. 如果不设置release tag，对应类型声明默认会打包到输出产物中。我希望的是默认将类型当作internal，不输出出去
2. 在class上设置public后，默认内部的类型都是public。这导致如果内部internal属性为主的话，修改起来有点繁琐。其次，日后添加新的属性，有可能会忘记添加internal标签，导致内部的实现被外部知道。（当然，api-extractor输出的api-reporter，如果在github mr时仔细检查的话，也有助于
3. 需要测试一下，如果是EventEmitter的话，该设置EventEmitter的类型