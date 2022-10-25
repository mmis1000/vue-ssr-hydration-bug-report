// Copyright (c) 2022 mmis1
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { InjectionKey } from "vue";

export const CounterKey = 'counter' as unknown as InjectionKey<{ count: number }>