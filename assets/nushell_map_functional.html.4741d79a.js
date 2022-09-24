import{_ as t,o as d,c as r,e}from"./app.e07b607b.js";const a={},s=e('<h1 id="nu-map-from-functional-languages" tabindex="-1"><a class="header-anchor" href="#nu-map-from-functional-languages" aria-hidden="true">#</a> Nu map from functional languages</h1><p>The idea behind this table is to help you understand how Nu builtins and plugins relate to functional languages. We&#39;ve tried to produce a map of all the Nu commands and what their equivalents are in other languages. Contributions are welcome.</p><p>Note: this table assumes Nu 0.43 or later.</p><table><thead><tr><th>Nushell</th><th>Clojure</th><th>Tablecloth (Ocaml / Elm)</th><th>Haskell</th><th></th></tr></thead><tbody><tr><td>alias</td><td></td><td></td><td></td><td></td></tr><tr><td>append</td><td>conj, into, concat</td><td>append, (++), concat, concatMap</td><td>(++)</td><td></td></tr><tr><td>args</td><td></td><td></td><td></td><td></td></tr><tr><td>autoview</td><td></td><td></td><td></td><td></td></tr><tr><td>math avg</td><td></td><td></td><td></td><td></td></tr><tr><td>into binary</td><td>Integer/toHexString</td><td></td><td>showHex</td><td></td></tr><tr><td>calc, <code>&lt;math expression&gt;</code></td><td>math operators</td><td></td><td></td><td></td></tr><tr><td>cd</td><td></td><td></td><td></td><td></td></tr><tr><td>clear</td><td></td><td></td><td></td><td></td></tr><tr><td>clip</td><td></td><td></td><td></td><td></td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td></td><td></td><td></td><td></td></tr><tr><td>count</td><td>count</td><td>length, size</td><td>length, size</td><td></td></tr><tr><td>cp</td><td></td><td></td><td></td><td></td></tr><tr><td>date</td><td>java.time.LocalDate/now</td><td></td><td></td><td></td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td></td><td></td><td></td><td></td></tr><tr><td>each</td><td>map, mapv, iterate</td><td>map, forEach</td><td>map, mapM</td><td></td></tr><tr><td>echo</td><td>println</td><td></td><td>putStrLn, print</td><td></td></tr><tr><td>enter</td><td></td><td></td><td></td><td></td></tr><tr><td>exit</td><td>System/exit</td><td></td><td></td><td></td></tr><tr><td>fetch(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>first</td><td>first</td><td>head</td><td>head</td><td></td></tr><tr><td>format</td><td>format</td><td></td><td>Text.Printf.printf</td><td></td></tr><tr><td>from</td><td></td><td></td><td></td><td></td></tr><tr><td>get</td><td></td><td></td><td></td><td></td></tr><tr><td>group-by</td><td>group-by</td><td></td><td>group, groupBy</td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>doc</td><td></td><td></td><td></td></tr><tr><td>histogram</td><td></td><td></td><td></td><td></td></tr><tr><td>history</td><td></td><td></td><td></td><td></td></tr><tr><td>inc(<code>*</code>)</td><td>inc</td><td></td><td>succ</td><td></td></tr><tr><td>insert</td><td></td><td></td><td></td><td></td></tr><tr><td>is-empty</td><td>empty?</td><td>isEmpty</td><td></td><td></td></tr><tr><td>keep</td><td>take, drop-last, pop</td><td>take, init</td><td>take, init</td><td></td></tr><tr><td>keep-until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep-while</td><td>take-while</td><td>takeWhile</td><td>takeWhile</td><td></td></tr><tr><td>kill</td><td></td><td></td><td></td><td></td></tr><tr><td>last</td><td>last, peek, take-last</td><td>last</td><td>last</td><td></td></tr><tr><td>lines</td><td></td><td></td><td>lines, words, split-with</td><td></td></tr><tr><td>ls</td><td></td><td></td><td></td><td></td></tr><tr><td>match(<code>*</code>)</td><td>re-matches, re-seq, re-find</td><td></td><td></td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td></td><td></td><td></td><td></td></tr><tr><td>mv</td><td></td><td></td><td></td><td></td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>nth</td><td>Array.get</td><td>lookup</td><td></td></tr><tr><td>open</td><td>with-open</td><td></td><td></td><td></td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>transpose</td><td>(apply mapv vector matrix)</td><td></td><td>transpose</td><td></td></tr><tr><td>post(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>prepend</td><td>cons</td><td>cons, ::</td><td>::</td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps</td><td></td><td></td><td></td><td></td></tr><tr><td>pwd</td><td></td><td></td><td></td><td></td></tr><tr><td>range, 1..10</td><td>range</td><td>range</td><td>1..10, &#39;a&#39;..&#39;f&#39;</td><td></td></tr><tr><td>reduce</td><td>reduce, reduce-kv</td><td>foldr</td><td>foldr</td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td></td><td></td><td></td><td></td></tr><tr><td>reverse</td><td>reverse, rseq</td><td>reverse, reverseInPlace</td><td>reverse</td><td></td></tr><tr><td>rm</td><td></td><td></td><td></td><td></td></tr><tr><td>save</td><td></td><td></td><td></td><td></td></tr><tr><td>select</td><td>select-keys</td><td></td><td></td><td></td></tr><tr><td>shells</td><td></td><td></td><td></td><td></td></tr><tr><td>shuffle</td><td>shuffle</td><td></td><td></td><td></td></tr><tr><td>size</td><td>count</td><td></td><td>size, length</td><td></td></tr><tr><td>skip</td><td>rest</td><td>tail</td><td>tail</td><td></td></tr><tr><td>skip until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip while</td><td>drop-while</td><td>dropWhile</td><td>dropWhile, dropWhileEnd</td><td></td></tr><tr><td>sort-by</td><td>sort, sort-by, sorted-set-by</td><td>sort, sortBy, sortWith</td><td>sort, sortBy</td><td></td></tr><tr><td>split-by</td><td>split, split-{at,with,lines}</td><td>split, words, lines</td><td>split, words, lines</td><td></td></tr><tr><td>split column</td><td></td><td></td><td></td><td></td></tr><tr><td>split row</td><td></td><td></td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>clojure.string functions</td><td>String functions</td><td></td><td></td></tr><tr><td>str collect</td><td>join</td><td>concat</td><td>intercalate</td><td></td></tr><tr><td>str trim</td><td>trim, triml, trimr</td><td>trim, trimLeft, trimRight</td><td>strip</td><td></td></tr><tr><td>sum</td><td>apply +</td><td>sum</td><td>sum</td><td></td></tr><tr><td>sys</td><td></td><td></td><td></td><td></td></tr><tr><td>table</td><td></td><td></td><td></td><td></td></tr><tr><td>tags</td><td></td><td></td><td></td><td></td></tr><tr><td>tree(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>to</td><td></td><td></td><td></td><td></td></tr><tr><td>touch</td><td></td><td></td><td></td><td></td></tr><tr><td>uniq</td><td>set</td><td>Set.empty</td><td>Data.Set</td><td></td></tr><tr><td>upsert</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td></td><td></td><td></td><td></td></tr><tr><td>with_env</td><td></td><td></td><td></td><td></td></tr><tr><td>what</td><td></td><td></td><td></td><td></td></tr><tr><td>where</td><td>filter, filterv, select</td><td>filter, filterMap</td><td>filter</td><td></td></tr><tr><td>which</td><td></td><td></td><td></td><td></td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - these commands are part of the standard plugins</li></ul>',5),o=[s];function i(l,n){return d(),r("div",null,o)}const p=t(a,[["render",i],["__file","nushell_map_functional.html.vue"]]);export{p as default};
