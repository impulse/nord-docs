/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file A multi-part component to present a feature with textual and visualization elements.
 * It provides the `Text` container to wrap the `Heading`, `Subline` and `Actions` components for text content and the
 * `Visualization` container to a any visual component.
 * The main `FeatureDuo` container places both sub-containers side-by-side either horizontal for large width pages or
 * vertical for smaller widths.
 *
 * To swap the order of the sub-containers the `reverseRowOrder` boolean prop can be passed to the `Visualization`
 * component. To disable the dynamic vertical layout change the `verticalOnly` boolean prop can be passed to the
 * `FeatureDuo` and `Text` containers.
 *
 * The `Headline` component also takes the `large` boolean prop to use an increased font size instead of the styles
 * applied by the rendered `Heading` base HTML core atom.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */

import { Actions, Headline, Subline, Text, Visualization } from "./styled";

export { Actions, Headline, Subline, Text, Visualization };
export { default } from "./FeatureDuo";
