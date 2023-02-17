import{_ as r,M as n,p as l,q as c,Q as e,t,N as a,U as p,a1 as s}from"./framework-344bb0e4.js";const i={},u=s(`<h1 id="nu-的配色和主题" tabindex="-1"><a class="header-anchor" href="#nu-的配色和主题" aria-hidden="true">#</a> Nu 的配色和主题</h1><p>Nushell 界面的许多部分都可以定制它们的颜色，所有这些都可以在<code>config.nu</code>配置文件中设置。如果你在配置文件中看到 hash/hashtag/pound 符号 <code>#</code>，这意味着它后面的文字被注释掉了。</p><ol><li>表的边框</li><li>原始值</li><li>形状（这是命令行的语法）</li><li>提示</li><li>LS_COLORS</li></ol><h2 id="表格边框" tabindex="-1"><a class="header-anchor" href="#表格边框" aria-hidden="true">#</a> 表格边框</h2><hr><p>表的边框由<code>config.nu</code>中的<code>table_mode</code>设置来控制。下面是一个例子：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    table_mode: rounded
<span class="token punctuation">}</span>
</code></pre></div><p>下面是目前<code>table_mode</code>的可能选项：</p><ul><li><code>rounded</code> # 当然了，这个是最好的 😃</li><li><code>basic</code></li><li><code>compact</code></li><li><code>compact_double</code></li><li><code>light</code></li><li><code>thin</code></li><li><code>with_love</code></li><li><code>reinforced</code></li><li><code>heavy</code></li><li><code>none</code></li><li><code>other</code></li></ul><h3 id="颜色符号" tabindex="-1"><a class="header-anchor" href="#颜色符号" aria-hidden="true">#</a> 颜色符号</h3><hr><ul><li><code>r</code> - 标准颜色红色的缩写</li><li><code>rb</code> - 标准颜色红色的缩写，带有粗体属性</li><li><code>red</code> - 标准颜色红色</li><li><code>red_bold</code> - 带有粗体属性的标准颜色红色</li><li><code>&quot;#ff0000&quot;</code> - &quot;#hex&quot; 格式的颜色：前景色为红色（需要引号）</li><li><code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code> - 完整 &quot;#hex&quot; 格式：前景为红色，背景为蓝色的 &quot;#hex&quot; 格式，属性为粗体缩写。</li></ul><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><hr><table><thead><tr><th>编码</th><th>含义</th></tr></thead><tbody><tr><td>l</td><td>闪烁</td></tr><tr><td>b</td><td>加粗</td></tr><tr><td>d</td><td>暗淡</td></tr><tr><td>h</td><td>隐藏</td></tr><tr><td>i</td><td>斜体</td></tr><tr><td>r</td><td>反转</td></tr><tr><td>s</td><td>删除</td></tr><tr><td>u</td><td>下划线</td></tr><tr><td>n</td><td>无</td></tr><tr><td></td><td>默认为无</td></tr></tbody></table><h3 id="标准颜色-和缩写" tabindex="-1"><a class="header-anchor" href="#标准颜色-和缩写" aria-hidden="true">#</a> &quot;标准颜色&quot;和缩写</h3><table><thead><tr><th>代码</th><th>名称</th></tr></thead><tbody><tr><td>g</td><td>green</td></tr><tr><td>gb</td><td>green_bold</td></tr><tr><td>gu</td><td>green_underline</td></tr><tr><td>gi</td><td>green_italic</td></tr><tr><td>gd</td><td>green_dimmed</td></tr><tr><td>gr</td><td>green_reverse</td></tr><tr><td>gbl</td><td>green_blink</td></tr><tr><td>gst</td><td>green_strike</td></tr><tr><td>lg</td><td>light_green</td></tr><tr><td>lgb</td><td>light_green_bold</td></tr><tr><td>lgu</td><td>light_green_underline</td></tr><tr><td>lgi</td><td>light_green_italic</td></tr><tr><td>lgd</td><td>light_green_dimmed</td></tr><tr><td>lgr</td><td>light_green_reverse</td></tr><tr><td>lgbl</td><td>light_green_blink</td></tr><tr><td>lgst</td><td>light_green_strike</td></tr><tr><td>r</td><td>red</td></tr><tr><td>rb</td><td>red_bold</td></tr><tr><td>ru</td><td>red_underline</td></tr><tr><td>ri</td><td>red_italic</td></tr><tr><td>rd</td><td>red_dimmed</td></tr><tr><td>rr</td><td>red_reverse</td></tr><tr><td>rbl</td><td>red_blink</td></tr><tr><td>rst</td><td>red_strike</td></tr><tr><td>lr</td><td>light_red</td></tr><tr><td>lrb</td><td>light_red_bold</td></tr><tr><td>lru</td><td>light_red_underline</td></tr><tr><td>lri</td><td>light_red_italic</td></tr><tr><td>lrd</td><td>light_red_dimmed</td></tr><tr><td>lrr</td><td>light_red_reverse</td></tr><tr><td>lrbl</td><td>light_red_blink</td></tr><tr><td>lrst</td><td>light_red_strike</td></tr><tr><td>u</td><td>blue</td></tr><tr><td>ub</td><td>blue_bold</td></tr><tr><td>uu</td><td>blue_underline</td></tr><tr><td>ui</td><td>blue_italic</td></tr><tr><td>ud</td><td>blue_dimmed</td></tr><tr><td>ur</td><td>blue_reverse</td></tr><tr><td>ubl</td><td>blue_blink</td></tr><tr><td>ust</td><td>blue_strike</td></tr><tr><td>lu</td><td>light_blue</td></tr><tr><td>lub</td><td>light_blue_bold</td></tr><tr><td>luu</td><td>light_blue_underline</td></tr><tr><td>lui</td><td>light_blue_italic</td></tr><tr><td>lud</td><td>light_blue_dimmed</td></tr><tr><td>lur</td><td>light_blue_reverse</td></tr><tr><td>lubl</td><td>light_blue_blink</td></tr><tr><td>lust</td><td>light_blue_strike</td></tr><tr><td>b</td><td>black</td></tr><tr><td>bb</td><td>black_bold</td></tr><tr><td>bu</td><td>black_underline</td></tr><tr><td>bi</td><td>black_italic</td></tr><tr><td>bd</td><td>black_dimmed</td></tr><tr><td>br</td><td>black_reverse</td></tr><tr><td>bbl</td><td>black_blink</td></tr><tr><td>bst</td><td>black_strike</td></tr><tr><td>ligr</td><td>light_gray</td></tr><tr><td>ligrb</td><td>light_gray_bold</td></tr><tr><td>ligru</td><td>light_gray_underline</td></tr><tr><td>ligri</td><td>light_gray_italic</td></tr><tr><td>ligrd</td><td>light_gray_dimmed</td></tr><tr><td>ligrr</td><td>light_gray_reverse</td></tr><tr><td>ligrbl</td><td>light_gray_blink</td></tr><tr><td>ligrst</td><td>light_gray_strike</td></tr><tr><td>y</td><td>yellow</td></tr><tr><td>yb</td><td>yellow_bold</td></tr><tr><td>yu</td><td>yellow_underline</td></tr><tr><td>yi</td><td>yellow_italic</td></tr><tr><td>yd</td><td>yellow_dimmed</td></tr><tr><td>yr</td><td>yellow_reverse</td></tr><tr><td>ybl</td><td>yellow_blink</td></tr><tr><td>yst</td><td>yellow_strike</td></tr><tr><td>ly</td><td>light_yellow</td></tr><tr><td>lyb</td><td>light_yellow_bold</td></tr><tr><td>lyu</td><td>light_yellow_underline</td></tr><tr><td>lyi</td><td>light_yellow_italic</td></tr><tr><td>lyd</td><td>light_yellow_dimmed</td></tr><tr><td>lyr</td><td>light_yellow_reverse</td></tr><tr><td>lybl</td><td>light_yellow_blink</td></tr><tr><td>lyst</td><td>light_yellow_strike</td></tr><tr><td>p</td><td>purple</td></tr><tr><td>pb</td><td>purple_bold</td></tr><tr><td>pu</td><td>purple_underline</td></tr><tr><td>pi</td><td>purple_italic</td></tr><tr><td>pd</td><td>purple_dimmed</td></tr><tr><td>pr</td><td>purple_reverse</td></tr><tr><td>pbl</td><td>purple_blink</td></tr><tr><td>pst</td><td>purple_strike</td></tr><tr><td>lp</td><td>light_purple</td></tr><tr><td>lpb</td><td>light_purple_bold</td></tr><tr><td>lpu</td><td>light_purple_underline</td></tr><tr><td>lpi</td><td>light_purple_italic</td></tr><tr><td>lpd</td><td>light_purple_dimmed</td></tr><tr><td>lpr</td><td>light_purple_reverse</td></tr><tr><td>lpbl</td><td>light_purple_blink</td></tr><tr><td>lpst</td><td>light_purple_strike</td></tr><tr><td>c</td><td>cyan</td></tr><tr><td>cb</td><td>cyan_bold</td></tr><tr><td>cu</td><td>cyan_underline</td></tr><tr><td>ci</td><td>cyan_italic</td></tr><tr><td>cd</td><td>cyan_dimmed</td></tr><tr><td>cr</td><td>cyan_reverse</td></tr><tr><td>cbl</td><td>cyan_blink</td></tr><tr><td>cst</td><td>cyan_strike</td></tr><tr><td>lc</td><td>light_cyan</td></tr><tr><td>lcb</td><td>light_cyan_bold</td></tr><tr><td>lcu</td><td>light_cyan_underline</td></tr><tr><td>lci</td><td>light_cyan_italic</td></tr><tr><td>lcd</td><td>light_cyan_dimmed</td></tr><tr><td>lcr</td><td>light_cyan_reverse</td></tr><tr><td>lcbl</td><td>light_cyan_blink</td></tr><tr><td>lcst</td><td>light_cyan_strike</td></tr><tr><td>w</td><td>white</td></tr><tr><td>wb</td><td>white_bold</td></tr><tr><td>wu</td><td>white_underline</td></tr><tr><td>wi</td><td>white_italic</td></tr><tr><td>wd</td><td>white_dimmed</td></tr><tr><td>wr</td><td>white_reverse</td></tr><tr><td>wbl</td><td>white_blink</td></tr><tr><td>wst</td><td>white_strike</td></tr><tr><td>dgr</td><td>dark_gray</td></tr><tr><td>dgrb</td><td>dark_gray_bold</td></tr><tr><td>dgru</td><td>dark_gray_underline</td></tr><tr><td>dgri</td><td>dark_gray_italic</td></tr><tr><td>dgrd</td><td>dark_gray_dimmed</td></tr><tr><td>dgrr</td><td>dark_gray_reverse</td></tr><tr><td>dgrbl</td><td>dark_gray_blink</td></tr><tr><td>dgrst</td><td>dark_gray_strike</td></tr></tbody></table><h3 id="hex-格式" tabindex="-1"><a class="header-anchor" href="#hex-格式" aria-hidden="true">#</a> <code>&quot;#hex&quot;</code> 格式</h3><hr><p>&quot;#hex&quot; 格式是你通常看到的一种表示颜色的方式。它由简单的<code>#</code>字符以及后面的 6 个字符组成。前两个代表 <code>红色</code>，接下来两个代表 <code>绿色</code>，最后两个代表 <code>蓝色</code>。重要的是，这个字符串必须用引号包围，否则 Nushell 会认为它是一个被注释掉的字符串。</p><p>例子：红色的主要颜色是 &quot;#ff0000&quot; 或 &quot;#FF0000&quot;。字母的大写和小写没有区别。</p><p>这种 <code>&quot;#hex&quot;</code>格式允许我们为 Nushell 的不同部分指定 24 位真彩色调。</p><h2 id="完整-hex-格式" tabindex="-1"><a class="header-anchor" href="#完整-hex-格式" aria-hidden="true">#</a> <code>完整 &quot;#hex&quot;</code> 格式</h2><hr><p><code>完整 &quot;#hex&quot;</code>格式是对 <code>&quot;#hex&quot;</code> 格式的一种改进，但允许人们在一行中指定前景色、背景色和属性。</p><p>例如：<code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code></p><ul><li>前景色红色为 &quot;#hex&quot; 格式</li><li>背景色蓝色为 &quot;#hex&quot; 格式</li><li>属性为加粗的缩写形式</li></ul><h2 id="原始值" tabindex="-1"><a class="header-anchor" href="#原始值" aria-hidden="true">#</a> 原始值</h2><hr><p>原始值是像<code>int</code>和<code>string</code>这样的值。原始值和形状可以用上面看到的各种颜色符号来设置。</p><p>这是当前的原始值列表。并非所有这些都是可配置的。可配置的被标记为 <code>*</code>。</p><table><thead><tr><th>原始值</th><th>默认颜色</th><th>可配置</th></tr></thead><tbody><tr><td><code>any</code></td><td></td><td></td></tr><tr><td><code>binary</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>block</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>bool</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>cellpath</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>condition</code></td><td></td><td></td></tr><tr><td><code>custom</code></td><td></td><td></td></tr><tr><td><code>date</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>duration</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>expression</code></td><td></td><td></td></tr><tr><td><code>filesize</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>float</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>glob</code></td><td></td><td></td></tr><tr><td><code>import</code></td><td></td><td></td></tr><tr><td><code>int</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>list</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>nothing</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>number</code></td><td></td><td></td></tr><tr><td><code>operator</code></td><td></td><td></td></tr><tr><td><code>path</code></td><td></td><td></td></tr><tr><td><code>range</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>record</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>signature</code></td><td></td><td></td></tr><tr><td><code>string</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>table</code></td><td></td><td></td></tr><tr><td><code>var</code></td><td></td><td></td></tr><tr><td><code>vardecl</code></td><td></td><td></td></tr><tr><td><code>variable</code></td><td></td><td></td></tr></tbody></table><h4 id="特殊的-原始值-不是真正的原始值-它们的存在仅仅是为了着色" tabindex="-1"><a class="header-anchor" href="#特殊的-原始值-不是真正的原始值-它们的存在仅仅是为了着色" aria-hidden="true">#</a> 特殊的 &quot;原始值&quot;（不是真正的原始值，它们的存在仅仅是为了着色）</h4><table><thead><tr><th>原始值</th><th>默认颜色</th><th>可配置</th></tr></thead><tbody><tr><td><code>leading_trailing_space_bg</code></td><td>Color::Rgb(128, 128, 128))</td><td>*</td></tr><tr><td><code>header</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>empty</code></td><td>Color::Blue.normal()</td><td>*</td></tr><tr><td><code>row_index</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>hints</code></td><td>Color::DarkGray.normal()</td><td>*</td></tr></tbody></table><p>下面是一个改变其中一些数值的小例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: purple
        leading_trailing_space_bg: <span class="token string">&quot;#ffffff&quot;</span>
        header: gb
        date: wd
        filesize: c
        row_index: cb
        bool: red
        int: green
        duration: blue_bold
        range: purple
        float: red
        string: white
        nothing: red
        binary: red
        cellpath: cyan
        hints: dark_gray
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>下面是另一个使用多种颜色语法的小例子，其中有一些注释：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: <span class="token string">&quot;#88b719&quot;</span> <span class="token comment"># this sets only the foreground color like PR #486</span>
        leading_trailing_space_bg: white <span class="token comment"># this sets only the foreground color in the original style</span>
        header: <span class="token punctuation">{</span> <span class="token comment"># this is like PR #489</span>
            fg: <span class="token string">&quot;#B01455&quot;</span>, <span class="token comment"># note, quotes are required on the values with hex colors</span>
            bg: <span class="token string">&quot;#ffb900&quot;</span>,<span class="token comment"># note, commas are not required, it could also be all on one line</span>
            attr: bli <span class="token comment"># note, there are no quotes around this value. it works with or without quotes</span>
        <span class="token punctuation">}</span>
        date: <span class="token string">&quot;#75507B&quot;</span>
        filesize: <span class="token string">&quot;#729fcf&quot;</span>
        row_index: <span class="token punctuation">{</span>
            <span class="token comment"># note that this is another way to set only the foreground, no need to specify bg and attr</span>
            fg: <span class="token string">&quot;#e50914&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="shape-值" tabindex="-1"><a class="header-anchor" href="#shape-值" aria-hidden="true">#</a> <code>Shape</code> 值</h2><p>如上所述，&quot;形状&quot; 是一个用来表示语法着色的术语。</p><p>下面是当前支持的平面形状列表：</p><table><thead><tr><th>形状</th><th>默认样式</th><th>可配置</th></tr></thead><tbody><tr><td><code>shape_block</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_bool</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_custom</code></td><td>bold()</td><td>*</td></tr><tr><td><code>shape_external</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_externalarg</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_filepath</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_flag</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_float</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_garbage</code></td><td>fg(Color::White).on(Color::Red).bold()</td><td>*</td></tr><tr><td><code>shape_globpattern</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_int</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_internalcall</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_list</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_literal</code></td><td>fg(Color::Blue)</td><td>*</td></tr><tr><td><code>shape_nothing</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_operator</code></td><td>fg(Color::Yellow)</td><td>*</td></tr><tr><td><code>shape_range</code></td><td>fg(Color::Yellow).bold()</td><td>*</td></tr><tr><td><code>shape_record</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_signature</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_string</code></td><td>fg(Color::Green)</td><td>*</td></tr><tr><td><code>shape_string_interpolation</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_table</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_variable</code></td><td>fg(Color::Purple)</td><td>*</td></tr></tbody></table><p>这里有一个小例子，说明如何对这些项目应用颜色。任何没有显示指定的都会被设置为默认的颜色。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
        shape_bool: green
        shape_int: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#0000ff&quot;</span> attr: b<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="提示-的配置和着色" tabindex="-1"><a class="header-anchor" href="#提示-的配置和着色" aria-hidden="true">#</a> &quot;提示&quot;的配置和着色</h2><p>Nushell 的提示符可以通过这些环境变量进行配置：</p><ul><li><code>PROMPT_COMMAND</code>: 为设置提示而执行的代码（块）</li><li><code>PROMPT_COMMAND_RIGHT</code>: 为设置 <em>RIGHT</em> 提示而执行的代码（块）(参考 nu_scripts 里的 oh-my.nu)</li><li><code>PROMPT_INDICATOR</code> = &quot;〉&quot;: 提示后打印的标识（默认为&quot;&gt;&quot;类 Unicode 符号）</li><li><code>PROMPT_INDICATOR_VI_INSERT</code> = &quot;: &quot;</li><li><code>PROMPT_INDICATOR_VI_NORMAL</code> = &quot;v &quot;</li><li><code>PROMPT_MULTILINE_INDICATOR</code> = &quot;::: &quot;</li></ul><p>例如：对于一个简单的提示，我们可以这样做。注意<code>PROMPT_COMMAND</code>需要一个<code>block</code>而其他的需要一个<code>string</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> build-string <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %I:%M:%S%.3f&#39;</span><span class="token punctuation">)</span> <span class="token string">&#39;: &#39;</span> <span class="token punctuation">(</span>pwd <span class="token operator">|</span> path <span class="token function">basename</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre></div><p>如果你不喜欢默认的<code>PROMPT_INDICATOR</code>，你可以这样改变它：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;&gt; &quot;</span>
</code></pre></div>`,51),h=e("code",null,"PROMPT_COMMAND",-1),b=e("code",null,"block",-1),g={href:"https://github.com/nushell/nu_scripts/blob/main/prompt/oh-my.nu",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"ls-命令的配色-ls-colors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ls-命令的配色-ls-colors","aria-hidden":"true"},"#"),t(),e("code",null,"ls"),t(" 命令的配色:"),e("code",null,"LS_COLORS")],-1),k=e("code",null,"LS_COLORS",-1),m=e("code",null,"ls",-1),f=e("code",null,"_.md",-1),q=e("code",null,"_.toml",-1),y={href:"https://github.com/trapd00r/LS_COLORS",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"ls_colors",-1),C=e("code",null,"dircolors",-1),w=e("code",null,"LS_COLORS",-1),x={href:"https://www.linuxhowto.net/how-to-set-colors-for-ls-command/",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"LS_COLORS",-1),$=e("code",null,"vivid",-1),L=e("code",null,"config.nu",-1),R={href:"https://github.com/sharkdp/vivid",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"vivid",-1),S=s(`<p><code>let-env LS_COLORS = (vivid generate molokai | str trim)</code>。</p><p>如果没有设置 <code>LS_COLORS</code>，Nushell 将默认使用内置的 <code>LS_COLORS</code> 设置，基于 8 位（扩展）ANSI 颜色。</p><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2><p>主题设计结合了上述所有的着色。这里有一个快速的例子，我们把它放在一起，以证明主题定制的能力。这是对我们在网络上看到的 <code>base16</code> 主题的一种转换。</p><p>使主题生效的关键是确保你在声明 <code>let config =</code> 行 <em>之前</em>，在<code>config.nu</code>文件中指定你要使用的所有主题和颜色：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># let&#39;s define some colors</span>

<span class="token builtin class-name">let</span> base00 <span class="token operator">=</span> <span class="token string">&quot;#181818&quot;</span> <span class="token comment"># Default Background</span>
<span class="token builtin class-name">let</span> base01 <span class="token operator">=</span> <span class="token string">&quot;#282828&quot;</span> <span class="token comment"># Lighter Background (Used for status bars, line number and folding marks)</span>
<span class="token builtin class-name">let</span> base02 <span class="token operator">=</span> <span class="token string">&quot;#383838&quot;</span> <span class="token comment"># Selection Background</span>
<span class="token builtin class-name">let</span> base03 <span class="token operator">=</span> <span class="token string">&quot;#585858&quot;</span> <span class="token comment"># Comments, Invisibles, Line Highlighting</span>
<span class="token builtin class-name">let</span> base04 <span class="token operator">=</span> <span class="token string">&quot;#b8b8b8&quot;</span> <span class="token comment"># Dark Foreground (Used for status bars)</span>
<span class="token builtin class-name">let</span> base05 <span class="token operator">=</span> <span class="token string">&quot;#d8d8d8&quot;</span> <span class="token comment"># Default Foreground, Caret, Delimiters, Operators</span>
<span class="token builtin class-name">let</span> base06 <span class="token operator">=</span> <span class="token string">&quot;#e8e8e8&quot;</span> <span class="token comment"># Light Foreground (Not often used)</span>
<span class="token builtin class-name">let</span> base07 <span class="token operator">=</span> <span class="token string">&quot;#f8f8f8&quot;</span> <span class="token comment"># Light Background (Not often used)</span>
<span class="token builtin class-name">let</span> base08 <span class="token operator">=</span> <span class="token string">&quot;#ab4642&quot;</span> <span class="token comment"># Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted</span>
<span class="token builtin class-name">let</span> base09 <span class="token operator">=</span> <span class="token string">&quot;#dc9656&quot;</span> <span class="token comment"># Integers, Boolean, Constants, XML Attributes, Markup Link Url</span>
<span class="token builtin class-name">let</span> base0a <span class="token operator">=</span> <span class="token string">&quot;#f7ca88&quot;</span> <span class="token comment"># Classes, Markup Bold, Search Text Background</span>
<span class="token builtin class-name">let</span> base0b <span class="token operator">=</span> <span class="token string">&quot;#a1b56c&quot;</span> <span class="token comment"># Strings, Inherited Class, Markup Code, Diff Inserted</span>
<span class="token builtin class-name">let</span> base0c <span class="token operator">=</span> <span class="token string">&quot;#86c1b9&quot;</span> <span class="token comment"># Support, Regular Expressions, Escape Characters, Markup Quotes</span>
<span class="token builtin class-name">let</span> base0d <span class="token operator">=</span> <span class="token string">&quot;#7cafc2&quot;</span> <span class="token comment"># Functions, Methods, Attribute IDs, Headings</span>
<span class="token builtin class-name">let</span> base0e <span class="token operator">=</span> <span class="token string">&quot;#ba8baf&quot;</span> <span class="token comment"># Keywords, Storage, Selector, Markup Italic, Diff Changed</span>
<span class="token builtin class-name">let</span> base0f <span class="token operator">=</span> <span class="token string">&quot;#a16946&quot;</span> <span class="token comment"># Deprecated, Opening/Closing Embedded Language Tags, e.g. &lt;?php ?&gt;</span>

<span class="token comment"># we&#39;re creating a theme here that uses the colors we defined above.</span>

<span class="token builtin class-name">let</span> base16_theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    separator: <span class="token variable">$base03</span>
    leading_trailing_space_bg: <span class="token variable">$base04</span>
    header: <span class="token variable">$base0b</span>
    date: <span class="token variable">$base0e</span>
    filesize: <span class="token variable">$base0d</span>
    row_index: <span class="token variable">$base0c</span>
    bool: <span class="token variable">$base08</span>
    int: <span class="token variable">$base0b</span>
    duration: <span class="token variable">$base08</span>
    range: <span class="token variable">$base08</span>
    float: <span class="token variable">$base08</span>
    string: <span class="token variable">$base04</span>
    nothing: <span class="token variable">$base08</span>
    binary: <span class="token variable">$base08</span>
    cellpath: <span class="token variable">$base08</span>
    hints: dark_gray

    <span class="token comment"># shape_garbage: { fg: $base07 bg: $base08 attr: b} # base16 white on red</span>
    <span class="token comment"># but i like the regular white on red for parse errors</span>
    shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
    shape_bool: <span class="token variable">$base0d</span>
    shape_int: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_float: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_range: <span class="token punctuation">{</span> fg: <span class="token variable">$base0a</span> attr: b<span class="token punctuation">}</span>
    shape_internalcall: <span class="token punctuation">{</span> fg: <span class="token variable">$base0c</span> attr: b<span class="token punctuation">}</span>
    shape_external: <span class="token variable">$base0c</span>
    shape_externalarg: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_literal: <span class="token variable">$base0d</span>
    shape_operator: <span class="token variable">$base0a</span>
    shape_signature: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_string: <span class="token variable">$base0b</span>
    shape_filepath: <span class="token variable">$base0d</span>
    shape_globpattern: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_variable: <span class="token variable">$base0e</span>
    shape_flag: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_custom: <span class="token punctuation">{</span>attr: b<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># now let&#39;s apply our regular config settings but also apply the &quot;color_config:&quot; theme that we specified above.</span>

<span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  filesize_metric: <span class="token boolean">true</span>
  table_mode: rounded <span class="token comment"># basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other</span>
  use_ls_colors: <span class="token boolean">true</span>
  color_config: <span class="token variable">$base16_theme</span> <span class="token comment"># &lt;-- this is the theme</span>
  use_grid_icons: <span class="token boolean">true</span>
  footer_mode: always <span class="token comment">#always, never, number_of_rows, auto</span>
  animate_prompt: <span class="token boolean">false</span>
  float_precision: <span class="token number">2</span>
  use_ansi_coloring: <span class="token boolean">true</span>
  filesize_format: <span class="token string">&quot;b&quot;</span> <span class="token comment"># b, kb, kib, mb, mib, gb, gib, tb, tib, pb, pib, eb, eib, zb, zib, auto</span>
  edit_mode: emacs <span class="token comment"># vi</span>
  max_history_size: <span class="token number">10000</span>
  log_level: error
<span class="token punctuation">}</span>
</code></pre></div><p>如果你想在主题设计上火力全开，你需要把我在一开始提到的所有项目作为主题，包括<code>LS_COLORS</code>和提示。祝您好运!</p><h3 id="在终端上使用浅色背景" tabindex="-1"><a class="header-anchor" href="#在终端上使用浅色背景" aria-hidden="true">#</a> 在终端上使用浅色背景</h3><p>Nushell 的默认配置文件包含一个浅色主题定义，如果你在浅色背景的终端上工作，你可以很容易地应用浅色主题：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># in $nu.config-file</span>
let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  color_config: <span class="token variable">$dark_theme</span>   <span class="token comment"># 如果你需要浅色主题, 可以将 \`$dark_theme\` 替换为 \`$light_theme\`</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre></div><p>你只需要将 <code>$dark_theme</code> 替换为 <code>$light_theme</code> 就可以切换到浅色主题了：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># in $nu.config-file</span>
let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  color_config: <span class="token variable">$light_theme</span>   <span class="token comment"># if you want a light theme, replace \`$dark_theme\` to \`$light_theme\`</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre></div>`,12);function N(I,P){const d=n("ExternalLinkIcon"),o=n("RouterLink");return l(),c("div",null,[u,e("p",null,[t("提示的颜色由 "),h,t(" 中的 "),b,t(" 控制，在这里你可以编写自己的自定义提示。我们写了一个稍微花哨点的，有 git 状态的，位于 "),e("a",g,[t("nu_scripts 仓库"),a(d)]),t("。")]),_,e("p",null,[t("Nushell 将尊重并使用 Mac、Linux 和 Windows 上的 "),k,t(" 环境变量设置。这个设置允许你在做"),a(o,{to:"/commands/docs/ls.html"},{default:p(()=>[m]),_:1}),t("时定义文件类型的颜色。例如，你可以让目录变成一种颜色，"),f,t(" markdown 文件一种颜色，"),q,t(" 文件变成另一种颜色，等等。有很多方法可以给你的文件类型着色。")]),e("p",null,[t("有一个详尽的清单可以在 "),e("a",y,[t("这里"),a(d)]),t(" 看到，不过它可能太多了，但可以让你初步了解如何创建一个"),v,t("文件，而"),C,t("可以把它变成"),w,t("环境变量。")]),e("p",null,[e("a",x,[t("这"),a(d)]),t(" 是对"),O,t("的一个相当好的介绍。我相信你可以在网上找到更多相关教程。")]),e("p",null,[t("我喜欢"),$,t("应用程序，目前在我的"),L,t("中是这样配置的。你可以在 "),e("a",R,[t("这里"),a(d)]),t(" 找到"),M,t("。")]),S])}const D=r(i,[["render",N],["__file","coloring_and_theming.html.vue"]]);export{D as default};
