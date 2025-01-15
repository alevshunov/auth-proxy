import { type LiveConfig } from "~/config";

import type RightsStrategy from "./RightsStrategy";

type RightsStrategyFactory<T, S> = {
    add: (name: LiveConfig['scope'], strategy: RightsStrategy<T, S>) => void;
    select: (strategyName: LiveConfig['scope']) => RightsStrategy<T, S>;
};

export default RightsStrategyFactory;
