# locate
Locate the nth character in a string.

```ts
import { locate } from "https://deno.land/x/locate/mod.ts";

const template =
`xue hua piao piao
bei feng xiao xiao`

console.log(locate(template, 21));
// { line: 1, column: 2 }
```