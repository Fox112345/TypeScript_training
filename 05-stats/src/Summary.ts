import {MatchData} from "./MatchData";
import { WinsAnalyses } from "./analyzers/WinsAnalyses";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }

    static thisAnalysisHTMLReport(team: string): Summary {
        return new Summary(
            new WinsAnalyses(team),
            new HtmlReport()
        )
    }

}
