export class WeekLessThanOperator extends DateLessThanOperator {
    static get presetArguments(): {
        granularity: {
            valueSource: string;
            stringInput: string;
        };
    };
    constructor(context?: {});
}
import { DateLessThanOperator } from "./DateLessThan";