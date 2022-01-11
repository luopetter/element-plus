import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{l as t,k as a,y as d}from"./framework.506ba982.js";const v='{"title":"Migration","description":"","frontmatter":{"title":"Migration","lang":"en-US"},"headers":[{"level":2,"title":"Design updates","slug":"design-updates"},{"level":2,"title":"Component API changes","slug":"component-api-changes"},{"level":3,"title":"Timeline","slug":"timeline"},{"level":2,"title":"New components","slug":"new-components"},{"level":2,"title":"Vue 3 migration build","slug":"vue-3-migration-build"}],"relativePath":"en-US/guide/migration.md","lastUpdated":1641905617933}',n={},o=d('<h1 id="migration" tabindex="-1" data-v-235bd006>Migration <a class="header-anchor" href="#migration" aria-hidden="true" data-v-235bd006>#</a></h1><p data-v-235bd006>This document will help you upgrade from Element 2.x to Element Plus.</p><h2 id="design-updates" tabindex="-1" data-v-235bd006>Design updates <a class="header-anchor" href="#design-updates" aria-hidden="true" data-v-235bd006>#</a></h2><p data-v-235bd006>Element Plus added many design updates to the core design, we want to make element plus much better looking and easier to use. The list contains the changes we brought to Element Plus and the comparison with <strong data-v-235bd006>ElementUI 2.x</strong>. If you&#39;d like to know the reason behind all this, you can check out <a href="https://element-ui.yuque.com/docs/share/833524dd-d27f-42bb-b44e-5d4bf48a9b59?#" target="_blank" rel="noopener noreferrer" data-v-235bd006>this link</a></p><p data-v-235bd006>This API effects all components with a size attribute/prop</p><table data-v-235bd006><thead data-v-235bd006><tr data-v-235bd006><th data-v-235bd006>API Name</th><th data-v-235bd006>Previous acceptable value</th><th data-v-235bd006>Current Acceptable value</th></tr></thead><tbody data-v-235bd006><tr data-v-235bd006><td data-v-235bd006>size</td><td data-v-235bd006>large / default / small / mini</td><td data-v-235bd006>large / default / small</td></tr></tbody></table><h2 id="component-api-changes" tabindex="-1" data-v-235bd006>Component API changes <a class="header-anchor" href="#component-api-changes" aria-hidden="true" data-v-235bd006>#</a></h2><div class="tip custom-block" data-v-235bd006><p class="custom-block-title" data-v-235bd006>TIP</p><p data-v-235bd006>We are currently working on updating the content, if you do find what we have lost mention in this list, please <a href="https://github.com/element-plus/element-plus/issues/new/choose" target="_blank" rel="noopener noreferrer" data-v-235bd006>open an issue</a>. \u{1F647}</p></div><p data-v-235bd006>In this section we will use forms which would be more comprehensive to describe the changes we made to the components, you can go to the desired section for checking it out.</p><h3 id="timeline" tabindex="-1" data-v-235bd006>Timeline <a class="header-anchor" href="#timeline" aria-hidden="true" data-v-235bd006>#</a></h3><details data-v-235bd006><summary data-v-235bd006> API Naming Change</summary><table data-v-235bd006><thead data-v-235bd006><tr data-v-235bd006><th data-v-235bd006>Previous API Name</th><th data-v-235bd006>Current API Name</th><th data-v-235bd006>Description</th></tr></thead><tbody data-v-235bd006><tr data-v-235bd006><td data-v-235bd006>reverse</td><td data-v-235bd006>-</td><td data-v-235bd006>You should reverse the data instead of using API</td></tr></tbody></table></details><h2 id="new-components" tabindex="-1" data-v-235bd006>New components <a class="header-anchor" href="#new-components" aria-hidden="true" data-v-235bd006>#</a></h2><p data-v-235bd006>In Element Plus, we added a few new components, you can check them out, the components added in Element Plus are:</p><ul data-v-235bd006><li data-v-235bd006><a href="/en-US/component/config-provider.html" data-v-235bd006>Config Provider</a></li><li data-v-235bd006><a href="/en-US/component/descriptions.html" data-v-235bd006>Description</a></li><li data-v-235bd006><a href="/en-US/component/empty.html" data-v-235bd006>Empty</a></li><li data-v-235bd006><a href="/en-US/component/skeleton.html" data-v-235bd006>Skeleton</a></li><li data-v-235bd006><a href="/en-US/component/space.html" data-v-235bd006>Space</a></li><li data-v-235bd006><a href="/en-US/component/select-v2.html" data-v-235bd006>Virtual Select</a></li><li data-v-235bd006><a href="/en-US/component/tree-v2.html" data-v-235bd006>Virtual Tree</a></li></ul><p data-v-235bd006>Here is the list of breaking changes.</p><p data-v-235bd006>For now, check <a href="https://github.com/element-plus/element-plus/issues/162" target="_blank" rel="noopener noreferrer" data-v-235bd006>list of breaking changes</a> for full details before more thorough documentation is available.</p><h2 id="vue-3-migration-build" tabindex="-1" data-v-235bd006>Vue 3 migration build <a class="header-anchor" href="#vue-3-migration-build" aria-hidden="true" data-v-235bd006>#</a></h2><p data-v-235bd006>You may encounter some issues when using ElementPlus with Vue 3 migration build. Some of the components rely on Vue 3 internal API&#39;s. It&#39;s worth trying to adjust compatConfig mode to 3, either globally or <a href="https://v3.vuejs.org/guide/migration/migration-build.html#per-component-config" target="_blank" rel="noopener noreferrer" data-v-235bd006>per component in your project</a>.</p>',18),i=[o];function r(l,s,h,b,c,m){return a(),t("div",null,i)}var g=e(n,[["render",r],["__scopeId","data-v-235bd006"]]);export{v as __pageData,g as default};
