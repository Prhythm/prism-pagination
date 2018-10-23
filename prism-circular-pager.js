import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './prism-pagination.js';

/**
 * `<prism-circular-pager>` is a [Polymer 3](http://polymer-project.org/) element provides pagination designed by material design via `<prism-pagination>`.
 *
 * # Usage
 *
 * ```
 * <prism-circular-pager page="6" count="20" range="3" url="/path-to-feature/items?p=#{page}"></prism-circular-pager>
 * ```
 *
 * ## Styling
 *
 * `<prism-circular-pager>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--var-prism-pager-color` | General link text color | `#454545`
 * `--var-prism-pager-background-color` | General link background color | `transparent`
 * `--var-prism-pager-current-color` | Current page link text color | `#fff`
 * `--var-prism-pager-current-background-color` | Current page link background color | `#454545`
 * `--var-prism-pager-hover-color` | Link hovered text color | `#454545`
 * `--var-prism-pager-hover-background-color` | Link hovered background color | `rgba(197, 197, 197, .62)`
 * `--var-prism-pager-shadow` | Shadow style | `0 2px 5px 0 rgba(0, 0, 0, .26)`
 *
 * @memberof Prhythm
 * @element prism-circular-pager
 * @customElement
 * @polymer
 */
class PrismCircularPager extends PolymerElement {

  static get is() { return 'prism-circular-pager'; }

  static get template() {
    return html`
      <style>
        :host {
          margin-top: .5rem;
          margin-bottom: .5rem;
          display: inline-block;

          --var-prism-pager-color: #454545;
          --var-prism-pager-background-color: transparent;
          --var-prism-pager-current-color: #fff;
          --var-prism-pager-current-background-color: #454545;
          --var-prism-pager-hover-color: #454545;
          --var-prism-pager-hover-background-color: rgba(197, 197, 197, .62);
          --var-prism-pager-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
        }

        :host[hidden] {
          display: none;
        }

        prism-pagination a.general {
          padding: .5rem .75rem;
          margin-left: -1px;
          color: var(--var-prism-pager-color);
          text-decoration: none;
          background-color: var(--var-prism-pager-background-color);
          border: 0 solid #ddd;
          min-width: 2.6em;
          margin-right: .5em;
          text-align: center;
          border-radius: 4em;
        }

        prism-pagination a.general:hover {
          color: var(--var-prism-pager-hover-color);
          background-color: var(--var-prism-pager-hover-background-color);
        }

        prism-pagination a.current,
        prism-pagination a.current:hover {
          cursor: default;
          color: var(--var-prism-pager-current-color);
          background-color: var(--var-prism-pager-current-background-color);
          border-color: var(--var-prism-pager-current-background-color);
          -webkit-box-shadow: var(--var-prism-pager-shadow);
          -moz-box-shadow: var(--var-prism-pager-shadow);
          box-shadow: var(--var-prism-pager-shadow);
        }
      </style>

      <prism-pagination page="[[page]]" count="[[count]]" range="[[range]]" url="[[url]]" hide-first="[[hideFirst]]" hide-last="[[hideLast]]" hide-previous="[[hidePrevious]]" hide-next="[[hideNext]]" hidden="{{hidden}}" on-page-changed="_pageChanged">
        <template slot="first"><a class$="[[css]]" href$="[[url]]">[[firstText]]</a></template>
        <template slot="previous"><a class$="[[css]]" href$="[[url]]">[[previousText]]</a></template>
        <template slot="general"><a class$="[[css]]" href$="[[url]]">[[text]]</a></template>
        <template slot="current"><a class$="[[css]]">[[text]]</a></template>
        <template slot="next"><a class$="[[css]]" href$="[[url]]">[[nextText]]</a></template>
        <template slot="last"><a class$="[[css]]" href$="[[url]]">[[lastText]]</a></template>
      </prism-pagination>
    `;
  }

  static get properties() {
    return {
      /**
      * Current page number
      */
      page: Number,

      /**
      * Page count of data
      */
      count: Number,

      /**
      * Count of pagination
      */
      range: {
        type: Number,
        value: 5
      },

      /**
      * Url template, replace page count and page number via `#{count}` and `#{page}` variable
      */
      url: String,

      /**
      * Hide first element
      */
      hideFirst: {
        type: Boolean,
        value: false
      },

      /**
      * Hide last element
      */
      hideLast: {
        type: Boolean,
        value: false
      },

      /**
      * Hide previous element
      */
      hidePrevious: {
        type: Boolean,
        value: false
      },

      /**
      * Hide next element
      */
      hideNext: {
        type: Boolean,
        value: false
      },

      /**
      * Text of first page
      */
      firstText: {
        type: String,
        value: '\u00ab'
      },

      /**
      * Text of last page
      */
      lastText: {
        type: String,
        value: '\u00bb'
      },

      /**
      * Text of previous page
      */
      previousText: {
        type: String,
        value: '\u2039'
      },

      /**
      * Text of next page
      */
      nextText: {
        type: String,
        value: '\u203a'
      },

      /**
      * Visibiliy
      */
      hidden: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  _pageChanged(event) {
    this.dispatchEvent(new CustomEvent('page-changed', event));
  }
}

customElements.define(PrismCircularPager.is, PrismCircularPager);
