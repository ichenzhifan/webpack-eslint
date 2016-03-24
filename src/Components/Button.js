import $ from 'jquery';
import template from './Button.html';
import Mustache from 'mustache';
import './Button.scss';

export default class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        alert(this.link);
    }

    render(node) {
        const text = $(node).text();

        // render out button
        $(node).html(Mustache.render(template, {
            link: this.link,
            text: text
        }));

        // attach our listener.
        $(node).find('.button').click(this.onClick.bind(this));
    }
}