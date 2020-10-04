var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":311,"id":25945,"methods":[{"el":62,"sc":2,"sl":52},{"el":75,"sc":2,"sl":73},{"el":87,"sc":2,"sl":85},{"el":156,"sc":2,"sl":89},{"el":171,"sc":2,"sl":168},{"el":186,"sc":2,"sl":181},{"el":204,"sc":2,"sl":196},{"el":251,"sc":2,"sl":214},{"el":267,"sc":2,"sl":253},{"el":282,"sc":2,"sl":269},{"el":286,"sc":2,"sl":284},{"el":290,"sc":2,"sl":288},{"el":294,"sc":2,"sl":292},{"el":298,"sc":2,"sl":296},{"el":302,"sc":2,"sl":300},{"el":306,"sc":2,"sl":304},{"el":310,"sc":2,"sl":308}],"name":"BermudanSwaption","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_159":{"methods":[{"sl":89},{"sl":168},{"sl":181},{"sl":214}],"name":"testVega[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":93},{"sl":94},{"sl":95},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":111},{"sl":114},{"sl":115},{"sl":116},{"sl":119},{"sl":120},{"sl":127},{"sl":128},{"sl":131},{"sl":134},{"sl":138},{"sl":140},{"sl":147},{"sl":148},{"sl":149},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":170},{"sl":182},{"sl":183},{"sl":185},{"sl":216},{"sl":219},{"sl":220},{"sl":222},{"sl":223},{"sl":226},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":245},{"sl":246},{"sl":250}]},"test_165":{"methods":[{"sl":52},{"sl":73},{"sl":85},{"sl":89},{"sl":168},{"sl":181},{"sl":214}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":74},{"sl":86},{"sl":93},{"sl":94},{"sl":95},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":111},{"sl":114},{"sl":115},{"sl":116},{"sl":119},{"sl":120},{"sl":127},{"sl":128},{"sl":131},{"sl":134},{"sl":138},{"sl":140},{"sl":147},{"sl":148},{"sl":149},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":170},{"sl":182},{"sl":183},{"sl":185},{"sl":216},{"sl":219},{"sl":220},{"sl":222},{"sl":223},{"sl":226},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":245},{"sl":246},{"sl":250}]},"test_288":{"methods":[{"sl":89},{"sl":168},{"sl":181},{"sl":214}],"name":"testGenericDelta[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":93},{"sl":94},{"sl":95},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":111},{"sl":114},{"sl":115},{"sl":116},{"sl":119},{"sl":120},{"sl":127},{"sl":128},{"sl":131},{"sl":134},{"sl":138},{"sl":140},{"sl":147},{"sl":148},{"sl":149},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":170},{"sl":182},{"sl":183},{"sl":185},{"sl":216},{"sl":219},{"sl":220},{"sl":222},{"sl":223},{"sl":226},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":245},{"sl":246},{"sl":250}]},"test_499":{"methods":[{"sl":89},{"sl":168},{"sl":181},{"sl":214}],"name":"testDelta[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":93},{"sl":94},{"sl":95},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":108},{"sl":111},{"sl":114},{"sl":115},{"sl":116},{"sl":119},{"sl":120},{"sl":127},{"sl":128},{"sl":131},{"sl":134},{"sl":138},{"sl":140},{"sl":147},{"sl":148},{"sl":149},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":170},{"sl":182},{"sl":183},{"sl":185},{"sl":216},{"sl":219},{"sl":220},{"sl":222},{"sl":223},{"sl":226},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":245},{"sl":246},{"sl":250}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [165], [165], [165], [165], [165], [165], [165], [165], [165], [165], [], [], [], [], [], [], [], [], [], [], [], [165], [165], [], [], [], [], [], [], [], [], [], [], [165], [165], [], [], [288, 159, 499, 165], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [], [], [], [288, 159, 499, 165], [], [288, 159, 499, 165], [], [], [], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [], [], [], [], [], [], [], [], [], [], [288, 159, 499, 165], [], [288, 159, 499, 165], [], [], [], [], [], [], [], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [288, 159, 499, 165], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [288, 159, 499, 165], [], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [288, 159, 499, 165], [], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [], [288, 159, 499, 165], [288, 159, 499, 165], [], [], [], [288, 159, 499, 165], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]