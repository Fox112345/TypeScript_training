import {MatchReader} from "./MatchReader";
import { Summary} from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

Summary
    .thisAnalysisHTMLReport("Man United")
    .buildAndPrintReport(matchReader.matches);