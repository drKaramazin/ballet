import MatchersUtil = jasmine.MatchersUtil;
import CustomMatcher = jasmine.CustomMatcher;
import CustomMatcherFactories = jasmine.CustomMatcherFactories;

export const customMatchers: CustomMatcherFactories = {
  approximatelyEqualTo: function(matchersUtil: MatchersUtil): CustomMatcher {
    return {
      compare(actual: number, expected: number, margin: number): jasmine.CustomMatcherResult {
        if (margin === undefined) {
          margin = 0;
        }

        const result: jasmine.CustomMatcherResult = {
          pass: actual >= expected - margin && actual <= expected + margin,
        };

        if (result.pass) {
          result.message = `Expected ${actual} approximately equals to ${expected}, margin ${margin}.`;
        } else {
          result.message = `Expected ${actual} doesn't approximately equal to ${expected}, margin ${margin}.`;
        }

        return result;
      },
    };
  },
};
