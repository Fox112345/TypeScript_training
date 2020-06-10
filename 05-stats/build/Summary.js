"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalyses_1 = require("./analyzers/WinsAnalyses");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    Summary.thisAnalysisHTMLReport = function (team) {
        return new Summary(new WinsAnalyses_1.WinsAnalyses(team), new HtmlReport_1.HtmlReport());
    };
    return Summary;
}());
exports.Summary = Summary;
