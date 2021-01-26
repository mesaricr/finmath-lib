var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":85,"id":34283,"methods":[{"el":37,"sc":2,"sl":32},{"el":54,"sc":2,"sl":49},{"el":60,"sc":2,"sl":56},{"el":66,"sc":2,"sl":62},{"el":72,"sc":2,"sl":68},{"el":83,"sc":2,"sl":74}],"name":"AnnuityDummyProduct","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_157":{"methods":[{"sl":32},{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testMulti","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78},{"sl":81},{"sl":82}]},"test_361":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_370":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_372":{"methods":[{"sl":32},{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testBasic","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78},{"sl":81},{"sl":82}]},"test_398":{"methods":[{"sl":32},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testSimplified","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":81},{"sl":82}]},"test_463":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_472":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_534":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_605":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_74":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]},"test_87":{"methods":[{"sl":49},{"sl":56},{"sl":62},{"sl":68},{"sl":74}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":59},{"sl":65},{"sl":71},{"sl":77},{"sl":78}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [157, 372, 398], [], [157, 372, 398], [157, 372, 398], [157, 372, 398], [], [], [], [], [], [], [], [], [], [], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 463], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 463], [370, 157, 472, 372, 87, 534, 74, 361, 605, 463], [370, 157, 472, 372, 87, 534, 74, 361, 605, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [], [], [370, 157, 472, 372, 87, 534, 74, 361, 605, 398, 463], [370, 157, 472, 372, 87, 534, 74, 361, 605, 463], [], [], [157, 372, 398], [157, 372, 398], [], [], []]