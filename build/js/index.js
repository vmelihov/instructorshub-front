jQuery(function(){$(".js-niceScroll").niceScroll({cursorborder:"#b3a598",background:"",cursorcolor:"#b3a598",autohidemode:!1});var n=".js-pageBlockLink",s=".js-pageBlock",e=$(window).width(),i=50;if(e<600&&(i=10),1281<e){var a=$(s+".active").index(),o=150,l=o;function t(e){setTimeout(function(){$(s).eq(e).addClass("active"),a=e},l),l+=o}function d(e){setTimeout(function(){$(s).eq(e).removeClass("active"),a=0<e?e-1:0},l),l+=o}function c(){$(".js-modal.active").removeClass("active"),$(".js-shadow").fadeOut()}$(n).on("click",function(){var e=$(this),s=e.parent().index();if(s!=a){if($(n).removeClass("active"),e.addClass("active"),a<s)for(var i=a;i<s+1;i++)t(i);else for(i=a;s<i;i--)d(i);l=o,c()}}),$(".js-distributorOpen").on("click",function(){$(".js-shadow").fadeIn()}),$(".js-modalOpen").on("click",function(){$("#"+$(this).data("modal")).addClass("active")}),$(".js-modalClose").on("click",function(){c()})}else $(n).on("click",function(){$("html, body").animate({scrollTop:$(s).eq($(this).parent().index()).offset().top},800),$(".js-mobi").slideUp()}),$(".js-modalOpen").on("click",function(){$(".js-shadow").fadeIn(),$("#"+$(this).data("modal")).css("top",$(window).scrollTop()+i).addClass("active").fadeIn()}),$(".js-modalClose").on("click",function(){$(".js-modal.active").removeClass("active").fadeOut().attr("style",""),$(".js-shadow").fadeOut()});var f=1,r=".js-nbNext",j=".js-nbPrev",u=".js-nb";400<e&&(f=4),1100<e&&(f=6),checkSliderBtns=function(e,s,i,n){i<=1?s.addClass("disabled"):s.removeClass("disabled"),n<=i?e.addClass("disabled"):e.removeClass("disabled")},fromRightToDisplay=function(e,s,i){s.find(".js-nbDisplayed").removeClass("js-nbDisplayed").addClass("n-left");for(var n=f*(e-1);n<f*e;n++)s.find(u).eq(n).removeClass("n-right").addClass("js-nbDisplayed");checkSliderBtns(s.find(r),s.find(j),e,i)},fromLeftToDisplay=function(e,s,i){s.find(".js-nbDisplayed").removeClass("js-nbDisplayed").addClass("n-right");for(var n=f*e;f*(e-1)<n;n--)s.find(u).eq(n-1).removeClass("n-left").addClass("js-nbDisplayed");checkSliderBtns(s.find(r),s.find(j),e,i)},$(".js-slider").each(function(){var e=$(this),s=e.find(".js-nbCurrent"),i=e.find(".js-nbPrev"),n=e.find(".js-nbNext"),a=1,o=Math.ceil(e.find(".js-nb").length/f);0==o&&(o=1),s.text("1"),e.find(".js-nbAll").text(o),fromRightToDisplay(a,e,o),i.on("click",function(){0==$(this).hasClass("disabled")&&(a--,fromLeftToDisplay(a,e,o),s.text(a))}),n.on("click",function(){0==$(this).hasClass("disabled")&&(a++,fromRightToDisplay(a,e,o),s.text(a))})}),$(".js-federalMain").on("click",function(){$(".js-federalSelectContent").slideToggle()}),$(".js-federalLink").on("click",function(){$(".js-federalSelected").text($(this).text()),$(".js-federalSelectContent").slideToggle()}),$(".js-mobiOpen").on("click",function(){$(".js-mobi").slideToggle()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJuaWNlU2Nyb2xsIiwiY3Vyc29yYm9yZGVyIiwiYmFja2dyb3VuZCIsImN1cnNvcmNvbG9yIiwiYXV0b2hpZGVtb2RlIiwieGxCbG9ja0xpbmsiLCJ4bEJsb2NrIiwid3ciLCJ3aW5kb3ciLCJ3aWR0aCIsIm1vZGFsVG9wT2Zmc2V0IiwiY3VycmVudFhsQmxvY2siLCJpbmRleCIsInN0YXJ0UGFnZXNEZWxheSIsInBhZ2VzRGVsYXkiLCJzaG93UGFnZXMiLCJpIiwic2V0VGltZW91dCIsImVxIiwiYWRkQ2xhc3MiLCJoaWRlUGFnZXMiLCJyZW1vdmVDbGFzcyIsIm1vZGFsQ2xvc2UiLCJmYWRlT3V0Iiwib24iLCJfdGhpcyIsInRoaXMiLCJfbmV4dCIsInBhcmVudCIsImZhZGVJbiIsImRhdGEiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwic2xpZGVVcCIsImNzcyIsImF0dHIiLCJuZXdzT25EaXNwbGF5IiwibmJOZXh0IiwibmJQcmV2IiwibmIiLCJjaGVja1NsaWRlckJ0bnMiLCJfcHJldiIsIl9wYWdlIiwiX3BhZ2VzQWxsIiwiZnJvbVJpZ2h0VG9EaXNwbGF5IiwiX3NsaWRlciIsImZpbmQiLCJmcm9tTGVmdFRvRGlzcGxheSIsImVhY2giLCJfbmJDdXJyIiwiX25iUHJldiIsIl9uYk5leHQiLCJfcGFnZUN1cnJlbnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInRleHQiLCJoYXNDbGFzcyIsInNsaWRlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxXQUNIQyxFQUFFLGtCQUFrQkMsV0FBVyxDQUMzQkMsYUFBYyxVQUNkQyxXQUFZLEdBQ1pDLFlBQWEsVUFDYkMsY0FBYyxJQUdsQixJQUFJQyxFQUFjLG9CQUNkQyxFQUFVLGdCQUNWQyxFQUFLUixFQUFFUyxRQUFRQyxRQUNmQyxFQUFpQixHQU1yQixHQUpJSCxFQUFLLE1BQ0xHLEVBQWlCLElBR1osS0FB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cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuanMtbmljZVNjcm9sbFwiKS5uaWNlU2Nyb2xsKHtcclxuICAgICAgICBjdXJzb3Jib3JkZXI6IFwiI2IzYTU5OFwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiXCIsXHJcbiAgICAgICAgY3Vyc29yY29sb3I6IFwiI2IzYTU5OFwiLFxyXG4gICAgICAgIGF1dG9oaWRlbW9kZTogITEsXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgeGxCbG9ja0xpbmsgPSBcIi5qcy1wYWdlQmxvY2tMaW5rXCIsXHJcbiAgICAgICAgeGxCbG9jayA9IFwiLmpzLXBhZ2VCbG9ja1wiLFxyXG4gICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCksXHJcbiAgICAgICAgbW9kYWxUb3BPZmZzZXQgPSA1MDtcclxuXHJcbiAgICBpZiAod3cgPCA2MDApIHtcclxuICAgICAgICBtb2RhbFRvcE9mZnNldCA9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3dyA+IDEyODEpIHtcclxuICAgICAgICB2YXIgY3VycmVudFhsQmxvY2sgPSAkKHhsQmxvY2sgKyBcIi5hY3RpdmVcIikuaW5kZXgoKSxcclxuICAgICAgICAgICAgc3RhcnRQYWdlc0RlbGF5ID0gMTUwLFxyXG4gICAgICAgICAgICBwYWdlc0RlbGF5ID0gc3RhcnRQYWdlc0RlbGF5O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93UGFnZXMoaSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoeGxCbG9jaykuZXEoaSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50WGxCbG9jayA9IGk7XHJcbiAgICAgICAgICAgIH0sIHBhZ2VzRGVsYXkpO1xyXG4gICAgICAgICAgICBwYWdlc0RlbGF5ICs9IHN0YXJ0UGFnZXNEZWxheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVQYWdlcyhpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh4bEJsb2NrKS5lcShpKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WGxCbG9jayA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WGxCbG9jayA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHBhZ2VzRGVsYXkpO1xyXG4gICAgICAgICAgICBwYWdlc0RlbGF5ICs9IHN0YXJ0UGFnZXNEZWxheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvc2UoKSB7XHJcbiAgICAgICAgICAgICQoXCIuanMtbW9kYWwuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkKFwiLmpzLXNoYWRvd1wiKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHhsQmxvY2tMaW5rKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIF9uZXh0ID0gX3RoaXMucGFyZW50KCkuaW5kZXgoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfbmV4dCAhPSBjdXJyZW50WGxCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgJCh4bEJsb2NrTGluaykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX25leHQgPiBjdXJyZW50WGxCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBjdXJyZW50WGxCbG9jazsgaSA8IF9uZXh0ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQYWdlcyhpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gY3VycmVudFhsQmxvY2s7IGkgPiBfbmV4dDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQYWdlcyhpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2VzRGVsYXkgPSBzdGFydFBhZ2VzRGVsYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9kYWxDbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIuanMtZGlzdHJpYnV0b3JPcGVuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmpzLXNoYWRvd1wiKS5mYWRlSW4oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIi5qcy1tb2RhbE9wZW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyAkKHRoaXMpLmRhdGEoXCJtb2RhbFwiKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIuanMtbW9kYWxDbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbW9kYWxDbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDQlNC+IDEyODBcclxuICAgICAgICAkKHhsQmxvY2tMaW5rKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoeGxCbG9jaykuZXEoJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgpKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAgICAgJChcIi5qcy1tb2JpXCIpLnNsaWRlVXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIi5qcy1tb2RhbE9wZW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuanMtc2hhZG93XCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgJCh0aGlzKS5kYXRhKFwibW9kYWxcIikpLmNzcyhcInRvcFwiLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyBtb2RhbFRvcE9mZnNldCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmFkZUluKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIuanMtbW9kYWxDbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5qcy1tb2RhbC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZmFkZU91dCgpLmF0dHIoXCJzdHlsZVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgJChcIi5qcy1zaGFkb3dcIikuZmFkZU91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdzT25EaXNwbGF5ID0gMSxcclxuICAgICAgICBuYk5leHQgPSBcIi5qcy1uYk5leHRcIixcclxuICAgICAgICBuYlByZXYgPSBcIi5qcy1uYlByZXZcIixcclxuICAgICAgICBuYiA9IFwiLmpzLW5iXCI7XHJcblxyXG4gICAgaWYgKHd3ID4gNDAwKSB7XHJcbiAgICAgICAgbmV3c09uRGlzcGxheSA9IDQ7XHJcbiAgICB9XHJcbiAgICBpZiAod3cgPiAxMTAwKSB7XHJcbiAgICAgICAgbmV3c09uRGlzcGxheSA9IDY7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTbGlkZXJCdG5zID0gZnVuY3Rpb24gKF9uZXh0LCBfcHJldiwgX3BhZ2UsIF9wYWdlc0FsbCkge1xyXG4gICAgICAgIGlmIChfcGFnZSA8PSAxKSB7XHJcbiAgICAgICAgICAgIF9wcmV2LmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3ByZXYucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wYWdlID49IF9wYWdlc0FsbCkge1xyXG4gICAgICAgICAgICBfbmV4dC5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9uZXh0LnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyb21SaWdodFRvRGlzcGxheSA9IGZ1bmN0aW9uIChfcGFnZSwgX3NsaWRlciwgX3BhZ2VzQWxsKSB7XHJcbiAgICAgICAgX3NsaWRlci5maW5kKFwiLmpzLW5iRGlzcGxheWVkXCIpLnJlbW92ZUNsYXNzKFwianMtbmJEaXNwbGF5ZWRcIikuYWRkQ2xhc3MoXCJuLWxlZnRcIik7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSBuZXdzT25EaXNwbGF5ICogKF9wYWdlIC0gMSk7IGkgPCBuZXdzT25EaXNwbGF5ICogX3BhZ2U7IGkrKykge1xyXG4gICAgICAgICAgICBfc2xpZGVyLmZpbmQobmIpLmVxKGkpLnJlbW92ZUNsYXNzKFwibi1yaWdodFwiKS5hZGRDbGFzcyhcImpzLW5iRGlzcGxheWVkXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNoZWNrU2xpZGVyQnRucyhfc2xpZGVyLmZpbmQobmJOZXh0KSwgX3NsaWRlci5maW5kKG5iUHJldiksIF9wYWdlLCBfcGFnZXNBbGwpO1xyXG4gICAgfVxyXG4gICAgZnJvbUxlZnRUb0Rpc3BsYXkgPSBmdW5jdGlvbiAoX3BhZ2UsIF9zbGlkZXIsIF9wYWdlc0FsbCkge1xyXG4gICAgICAgIF9zbGlkZXIuZmluZChcIi5qcy1uYkRpc3BsYXllZFwiKS5yZW1vdmVDbGFzcyhcImpzLW5iRGlzcGxheWVkXCIpLmFkZENsYXNzKFwibi1yaWdodFwiKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IG5ld3NPbkRpc3BsYXkgKiBfcGFnZTsgaSA+IG5ld3NPbkRpc3BsYXkgKiAoX3BhZ2UgLSAxKTsgaS0tKSB7XHJcbiAgICAgICAgICAgIF9zbGlkZXIuZmluZChuYikuZXEoaSAtIDEpLnJlbW92ZUNsYXNzKFwibi1sZWZ0XCIpLmFkZENsYXNzKFwianMtbmJEaXNwbGF5ZWRcIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2hlY2tTbGlkZXJCdG5zKF9zbGlkZXIuZmluZChuYk5leHQpLCBfc2xpZGVyLmZpbmQobmJQcmV2KSwgX3BhZ2UsIF9wYWdlc0FsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIi5qcy1zbGlkZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgX25iQ3VyciA9IF90aGlzLmZpbmQoXCIuanMtbmJDdXJyZW50XCIpLFxyXG4gICAgICAgICAgICBfbmJQcmV2ID0gX3RoaXMuZmluZChcIi5qcy1uYlByZXZcIiksXHJcbiAgICAgICAgICAgIF9uYk5leHQgPSBfdGhpcy5maW5kKFwiLmpzLW5iTmV4dFwiKSxcclxuICAgICAgICAgICAgX3BhZ2VDdXJyZW50ID0gMSxcclxuICAgICAgICAgICAgX3BhZ2VzQWxsID0gTWF0aC5jZWlsKF90aGlzLmZpbmQoXCIuanMtbmJcIikubGVuZ3RoIC8gbmV3c09uRGlzcGxheSk7XHJcblxyXG4gICAgICAgIGlmIChfcGFnZXNBbGwgPT0gMCkge1xyXG4gICAgICAgICAgICBfcGFnZXNBbGwgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbmJDdXJyLnRleHQoXCIxXCIpO1xyXG4gICAgICAgIF90aGlzLmZpbmQoXCIuanMtbmJBbGxcIikudGV4dChfcGFnZXNBbGwpO1xyXG5cclxuICAgICAgICBmcm9tUmlnaHRUb0Rpc3BsYXkoX3BhZ2VDdXJyZW50LCBfdGhpcywgX3BhZ2VzQWxsKTtcclxuXHJcbiAgICAgICAgX25iUHJldi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgX3BhZ2VDdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICBmcm9tTGVmdFRvRGlzcGxheShfcGFnZUN1cnJlbnQsIF90aGlzLCBfcGFnZXNBbGwpO1xyXG4gICAgICAgICAgICAgICAgX25iQ3Vyci50ZXh0KF9wYWdlQ3VycmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBfbmJOZXh0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBfcGFnZUN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgIGZyb21SaWdodFRvRGlzcGxheShfcGFnZUN1cnJlbnQsIF90aGlzLCBfcGFnZXNBbGwpO1xyXG4gICAgICAgICAgICAgICAgX25iQ3Vyci50ZXh0KF9wYWdlQ3VycmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKFwiLmpzLWZlZGVyYWxNYWluXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuanMtZmVkZXJhbFNlbGVjdENvbnRlbnRcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuanMtZmVkZXJhbExpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5qcy1mZWRlcmFsU2VsZWN0ZWRcIikudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAgICAgJChcIi5qcy1mZWRlcmFsU2VsZWN0Q29udGVudFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5qcy1tb2JpT3BlblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmpzLW1vYmlcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG59KSJdfQ==