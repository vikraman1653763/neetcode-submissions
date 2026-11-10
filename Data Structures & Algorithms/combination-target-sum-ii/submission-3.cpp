
class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<vector<int>> res;
        vector<int> path;

        sort(candidates.begin(), candidates.end());

        function<void(int, int)> bt = [&](int start, int remaining) {

            if (remaining == 0) {
                res.push_back(path);
                return;
            }

            for (int i = start; i < candidates.size(); i++) {

                // Skip duplicates at the same recursion level
                if (i > start && candidates[i] == candidates[i - 1]) {
                    continue;
                }

                // Pruning
                if (candidates[i] > remaining) {
                    break;
                }

                path.push_back(candidates[i]);

                // Move to the next index (each element used once)
                bt(i + 1, remaining - candidates[i]);

                path.pop_back();
            }
        };

        bt(0, target);

        return res;
    }
};
