// ==UserScript==
// @name         Cowlevel Deep Blue
// @namespace    Arc
// @version      1.7.4
// @description  A Solarized like dark theme for Cowlevel.net
// @author       Arcadia
// @match        https://*.cowlevel.net/*
// ==/UserScript==




// Color Palette by Paletton.com
// Palette URL:
// http://paletton.com/#uid=73B1q0kkDcj63jybndRts8ARM6w


// Primary color:

var MAIN_COLOR_0='26,44,64';
var MAIN_COLOR_1='84,92,102';
var MAIN_COLOR_2='48,60,72';
var MAIN_COLOR_3='7,25,45';
var MAIN_COLOR_4='1,16,34';

// Secondary color (1):

var SECOND_COLOR_0 = '70, 25, 62';
var SECOND_COLOR_1 = '112, 91,108';
var SECOND_COLOR_2 = '79, 51, 74';
var SECOND_COLOR_3 = '49,  4, 40';
var SECOND_COLOR_4 = '37,  0, 30';

// Secondary color (2):

var THIRD_COLOR_0 = '80, 94, 33';
var THIRD_COLOR_1 = '142,149,121';
var THIRD_COLOR_2 = '97,105, 68';
var THIRD_COLOR_3 = '52, 65,  5';
var THIRD_COLOR_4 = '38, 50,  0';

// Complement color:

var COM_COLOR_0 = '98, 73, 35';
var COM_COLOR_1 = '156,144,126';
var COM_COLOR_2 = '110, 95, 71';
var COM_COLOR_3 = '68, 44,  5';
var COM_COLOR_4 = '52, 31,  0';

// Generated by Paletton.com (c) 2002-2014


var MAIN_BG_COLOR=MAIN_COLOR_0;
var SECOND_BG_COLOR=MAIN_COLOR_3;
var LIGHT_BG_COLOR=MAIN_COLOR_2;
var RED_BG_COLOR=SECOND_COLOR_0;
var INPUT_BG_COLOR=MAIN_COLOR_4;


function addGlobalStyle(css) {
    var style = document.createElement('style');
    //style.type = 'text/css';
    style.innerHTML = css;
    document.body.appendChild(style);
}

function changeInlineBackgroundByClass(cls_name_, css) {
    try {
        document.getElementsByClassName(cls_name_)[0].style.background=css;
    }
    catch (err) {
    }
}

function changeInlineAttrBySelector(selector, attr_name, css) {
    try {
        $(selector).css(attr_name,css);
    }
    catch (err) {
    }
}

(function() {
    'use strict';
    // Your code here...

    var css_value=`
        /* header */
        #snow-target.header-nav {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .top-nav {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .bottom-nav {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        nav.header-nav.clearfix {
            background: rgb(`+SECOND_BG_COLOR+`)
        }


        /* body */
        article.main.wrap-outer {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        article.main {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        body > article > section {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        body {
            background: rgb(`+MAIN_BG_COLOR+`)
        }


        /* footer */
        .footer {
            background: rgb(`+MAIN_BG_COLOR+`)
        }


        /* transparent background*/
        .bg-gradient-2 {
            background: rgba(`+MAIN_BG_COLOR+`,0.95)
        }

        .bg-gradient {
            background: -webkit-gradient(linear, 0 24%, 0 60%, from(rgba(`+MAIN_BG_COLOR+`,.1)), to(rgba(`+MAIN_BG_COLOR+`,1)));
            background: linear-gradient(-180deg, rgba(`+MAIN_BG_COLOR+`,.1) 24%, rgba(`+MAIN_BG_COLOR+`,1) 100%);
            background: -moz-linear-gradient(top, rgba(`+MAIN_BG_COLOR+`.1),rgba(`+MAIN_BG_COLOR+`,1))
        }

        .bg-gradient-3{
            background: -webkit-gradient(linear, 0 24%, 0 60%, from(rgba(`+MAIN_BG_COLOR+`,.1)), to(rgba(`+MAIN_BG_COLOR+`,1)));
            background: linear-gradient(-180deg, rgba(`+MAIN_BG_COLOR+`,.1) 24%, rgba(`+MAIN_BG_COLOR+`,1) 100%);
            background: -moz-linear-gradient(top, rgba(`+MAIN_BG_COLOR+`.1),rgba(`+MAIN_BG_COLOR+`,1))
        }

        .tip-window {
            background: rgb(`+MAIN_BG_COLOR+`)
        }


        /* settings */
            div.setting-card {
            background: rgb(`+SECOND_BG_COLOR+`)
        }


        /* invite */
        section.invite-header.flex-box {
            background: rgb(`+SECOND_BG_COLOR+`)
        }


        /* editor */


        /* layui */
        .layui-layer-wrap {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        #layui-layer1 > div {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        .layui-layer-title {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        .feedback-layer {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        .layer {
            background: rgb(`+MAIN_BG_COLOR+`)
        }


        /* element */
        .vm-draft-card {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-article {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-answer {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-question {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-review {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-game {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-played {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-feed-card-answer-comment {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        div.vm-personal-card > .clearfix {
            background: rgb(`+LIGHT_BG_COLOR+`)
        }
        .vm-style-double-bevel {
            background: rgb(`+LIGHT_BG_COLOR+`);
            padding-top: 3px
        }
        .vm-layer-more-user {
            background: rgb(`+MAIN_BG_COLOR+`)
        }
        .vm-element-item {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-element-item.white.on {
            background: rgb(`+RED_BG_COLOR+`)
        }
        .vm-element-game-item {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .vm-element-header {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        section.vm-user-item-card {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        section.vm-invitation-item.bg-img {
            background-image: url("http://www.mountnoon.com/assets/files/2017-03-22/04:07:240-ticket2x-solarized.png")
        }


        /* comments */
        .comments.wrapper.fat-footer {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .comments {
            background: rgb(`+MAIN_BG_COLOR+`)
        }


        /* other */
        .open-layer {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .setting-list {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .single-post {
            background: rgb(`+MAIN_BG_COLOR+`)
        }


        .btn-card-border {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .notice-tip-window {
            background-color: rgb(`+MAIN_BG_COLOR+`)
        }
        .notice-tab li.weidu {
            background-color: rgb(`+MAIN_BG_COLOR+`)
        }
        .tip-tag {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        div.tip-game {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .hot-box.cl-card {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .swiper-slide.cl-shadow.block {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .wanguo-swiper.shouchang-swiper.swiper-slide {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        section.vm-avatar.flex-box {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        .left-bevel {
            display: none
        }
        .right-bevel {
            display: none
        }
        .cl-card {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        div.desc.sticky-box > .flex-box.flex-align-items-center.footer-info-box {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        div.tag-box.white {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
        div.tag-box.white.on {
            background: rgb(`+RED_BG_COLOR+`)
        }
        div.tag-box.white.hover {
            background: rgb(`+LIGHT_BG_COLOR+`)
        }
        .add-question-box {
            background: rgb(`+SECOND_BG_COLOR+`)
        }
    `;
    addGlobalStyle(css_value);


    //change in-line style
    /* body */
    changeInlineBackgroundByClass("v3-main", "rgb("+MAIN_BG_COLOR+")");
    changeInlineAttrBySelector("body > article:nth-child(13)", "background", "rgb("+MAIN_BG_COLOR+")");

    /* editor */
    changeInlineBackgroundByClass("fr-counter", "rgb("+INPUT_BG_COLOR+")");
    changeInlineAttrBySelector(".fr-basic", "background", "rgb("+INPUT_BG_COLOR+")");
})();
