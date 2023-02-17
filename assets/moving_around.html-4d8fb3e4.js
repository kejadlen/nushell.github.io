import{_ as c,M as l,p as d,q as r,Q as e,t as a,N as s,U as o,a1 as t}from"./framework-344bb0e4.js";const i={},m=t(`<h1 id="moving-around-your-system" tabindex="-1"><a class="header-anchor" href="#moving-around-your-system" aria-hidden="true">#</a> Moving around your system</h1><p>Early shells allow you to move around your filesystem and run commands, and modern shells like Nu allow you to do the same. Let&#39;s take a look at some of the common commands you might use when interacting with your system.</p><h2 id="viewing-directory-contents" tabindex="-1"><a class="header-anchor" href="#viewing-directory-contents" aria-hidden="true">#</a> Viewing directory contents</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div>`,4),p=e("code",null,"ls",-1),h=e("code",null,"ls",-1),u=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.md
───┬────────────────────┬──────┬─────────┬────────────
 <span class="token comment"># │ name               │ type │ size    │ modified </span>
───┼────────────────────┼──────┼─────────┼────────────
 <span class="token number">0</span> │ CODE_OF_CONDUCT.md │ File │  <span class="token number">3.4</span> KB │ <span class="token number">5</span> days ago 
 <span class="token number">1</span> │ CONTRIBUTING.md    │ File │   <span class="token number">886</span> B │ <span class="token number">5</span> days ago 
 <span class="token number">2</span> │ README.md          │ File │ <span class="token number">15.0</span> KB │ <span class="token number">5</span> days ago 
 <span class="token number">3</span> │ TODO.md            │ File │  <span class="token number">1.6</span> KB │ <span class="token number">5</span> days ago 
───┴────────────────────┴──────┴─────────┴────────────
</code></pre></div><h2 id="glob-patterns-wildcards" tabindex="-1"><a class="header-anchor" href="#glob-patterns-wildcards" aria-hidden="true">#</a> Glob patterns (wildcards)</h2><p>The asterisk (*) in the above optional argument &quot;*.md&quot; is sometimes called a wildcard or a glob. It lets us match anything. You could read the glob &quot;*.md&quot; as &quot;match any filename, so long as it ends with &#39;.md&#39; &quot;</p><p>The most general glob is <code>*</code>, which will match all paths. More often, you&#39;ll see this pattern used as part of another pattern, for example <code>*.bak</code> and <code>temp*</code>.</p><p>In Nushell, we also support double <code>*</code> to talk about traversing deeper paths that are nested inside of other directories. For example, <code>ls **/*</code> will list all the non-hidden paths nested under the current directory.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token function">ls</span> **/*.md
───┬───────────────────────────────────────────┬──────┬─────────┬───────────
 <span class="token comment"># │ name                                      │ type │ size    │ modified</span>
───┼───────────────────────────────────────────┼──────┼─────────┼───────────
 <span class="token number">0</span> │ CODE_OF_CONDUCT.md                        │ File │  <span class="token number">3.4</span> KB │ <span class="token number">5</span> days ago
 <span class="token number">1</span> │ CONTRIBUTING.md                           │ File │   <span class="token number">886</span> B │ <span class="token number">5</span> days ago
 <span class="token number">2</span> │ README.md                                 │ File │ <span class="token number">15.0</span> KB │ <span class="token number">5</span> days ago
 <span class="token number">3</span> │ TODO.md                                   │ File │  <span class="token number">1.6</span> KB │ <span class="token number">5</span> days ago
 <span class="token number">4</span> │ crates/nu-source/README.md                │ File │  <span class="token number">1.7</span> KB │ <span class="token number">5</span> days ago
 <span class="token number">5</span> │ docker/packaging/README.md                │ File │  <span class="token number">1.5</span> KB │ <span class="token number">5</span> days ago
 <span class="token number">6</span> │ docs/commands/README.md                   │ File │   <span class="token number">929</span> B │ <span class="token number">5</span> days ago
 <span class="token number">7</span> │ docs/commands/alias.md                    │ File │  <span class="token number">1.7</span> KB │ <span class="token number">5</span> days ago
 <span class="token number">8</span> │ docs/commands/append.md                   │ File │  <span class="token number">1.4</span> KB │ <span class="token number">5</span> days ago
</code></pre></div><p>Here, we&#39;re looking for any file that ends with &quot;.md&quot;, and the two asterisks further say &quot;in any directory starting from here&quot;.</p><p>In addition to <code>*</code>, there is also the <code>?</code> pattern which will match a single character. For example, you can match the word &quot;port&quot; by using the pattern <code>p???</code>.</p><h2 id="changing-the-current-directory" tabindex="-1"><a class="header-anchor" href="#changing-the-current-directory" aria-hidden="true">#</a> Changing the current directory</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> new_directory
</code></pre></div>`,10),g=e("code",null,"cd",-1),b=e("code",null,"..",-1),k=e("code",null,"cd",-1),_=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),a(` ./new_directory
`)])])],-1),y=e("strong",null,"Note:",-1),f=e("code",null,"cd",-1),w=e("code",null,"PWD",-1),v=e("h2",{id:"filesystem-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#filesystem-commands","aria-hidden":"true"},"#"),a(" Filesystem commands")],-1),x=e("p",null,"Nu also provides some basic filesystem commands that work cross-platform.",-1),F=e("code",null,"mv",-1),B=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),a(),e("span",{class:"token function"},"mv"),a(` item location
`)])])],-1),N=e("code",null,"cp",-1),T=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),a(),e("span",{class:"token function"},"cp"),a(` item location
`)])])],-1),E=e("code",null,"rm",-1),q=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),a(),e("span",{class:"token function"},"rm"),a(` item
`)])])],-1),O=e("code",null,"ls",-1),C=e("code",null,"mkdir",-1),D=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),a(),e("span",{class:"token function"},"mkdir"),a(` new_directory
`)])])],-1);function K(R,M){const n=l("RouterLink");return d(),r("div",null,[m,e("p",null,[a("As we've seen in other chapters, "),s(n,{to:"/commands/docs/ls.html"},{default:o(()=>[p]),_:1}),a(" is a command for viewing the contents of a path. Nu will return the contents as a table that we can use.")]),e("p",null,[a("The "),s(n,{to:"/commands/docs/ls.html"},{default:o(()=>[h]),_:1}),a(` command also takes an optional argument, to change what you'd like to view. For example, we can list the files that end in ".md"`)]),u,e("p",null,[a("To change from the current directory to a new one, we use the "),s(n,{to:"/commands/docs/cd.html"},{default:o(()=>[g]),_:1}),a(" command. Just as in other shells, we can use either the name of the directory, or if we want to go up a directory we can use the "),b,a(" shortcut.")]),e("p",null,[a("Changing the current working directory can also be done if "),s(n,{to:"/commands/docs/cd.html"},{default:o(()=>[k]),_:1}),a(" is omitted and a path by itself is given:")]),_,e("p",null,[y,a(" changing the directory with "),s(n,{to:"/commands/docs/cd.html"},{default:o(()=>[f]),_:1}),a(" changes the "),w,a(" environment variable. This means that a change of a directory is kept to the current block. Once you exit the block, you'll return to the previous directory. You can learn more about working with this in the "),s(n,{to:"/book/environment.html"},{default:o(()=>[a("environment chapter")]),_:1}),a(".")]),v,x,e("p",null,[a("We can move an item from one place to another using the "),s(n,{to:"/commands/docs/mv.html"},{default:o(()=>[F]),_:1}),a(" command:")]),B,e("p",null,[a("We can copy an item from one location to another with the "),s(n,{to:"/commands/docs/cp.html"},{default:o(()=>[N]),_:1}),a(" command:")]),T,e("p",null,[a("We can remove an item with the "),s(n,{to:"/commands/docs/rm.html"},{default:o(()=>[E]),_:1}),a(" command:")]),q,e("p",null,[a("The three commands also can use the glob capabilities we saw earlier with "),s(n,{to:"/commands/docs/ls.html"},{default:o(()=>[O]),_:1}),a(".")]),e("p",null,[a("Finally, we can create a new directory using the "),s(n,{to:"/commands/docs/mkdir.html"},{default:o(()=>[C]),_:1}),a(" command:")]),D])}const A=c(i,[["render",K],["__file","moving_around.html.vue"]]);export{A as default};
