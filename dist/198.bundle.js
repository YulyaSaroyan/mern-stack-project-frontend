"use strict";(self.webpackChunkreact_node=self.webpackChunkreact_node||[]).push([[198],{3198:function(r,n,e){e.r(n);var A=e(7294),o=e(615),a=(e(1990),e(9421),function(r){var n=r.images,e=(0,A.useRef)(null),a=(0,A.useCallback)((function(r){e.current.carouselWrapperRef.children[1].scrollLeft=800*Math.floor(r/9)}),[]),t=(0,A.useMemo)((function(){return n.map((function(r){return A.createElement("img",{key:r._id,srcSet:r.imgUrl,alt:"logo",itemType:"image/webp"})}))}),[n]);return A.createElement(o.lr,{className:"slider",infiniteLoop:!0,ref:e,onChange:a,renderThumbs:function(){return t}},t)});n.default=(0,A.memo)(a)},4955:function(r,n,e){e.r(n);var A=e(7537),o=e.n(A),a=e(3645),t=e.n(a)()(o());t.push([r.id,".slider {\r\n    border-radius: 10px;\r\n}\r\n\r\n.carousel .slider-wrapper {\r\n    max-width: 50%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.carousel .slider-wrapper .slider {\r\n    align-items: center;\r\n}\r\n\r\n.carousel .slider-wrapper img {\r\n    border: 4px solid  #3b2c5c;\r\n\r\n}\r\n/* .thumb img {\r\n    height: 40px;\r\n} */\r\n.control-dots {\r\n    display: none;\r\n}\r\n\r\n.carousel .thumb {\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    border: 3px solid transparent;\r\n}\r\n\r\n.carousel-root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.carousel-root p {\r\n    display: none;\r\n}\r\n\r\n.thumbs-wrapper .control-arrow {\r\n    display: none;\r\n}\r\n\r\n.carousel {\r\n    max-width: 800px;\r\n    overflow-x: scroll;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.thumbs-wrapper {\r\n    overflow: visible !important;\r\n}\r\n\r\n.carousel .thumb.selected,\r\n.carousel .thumb:hover {\r\n    border: 3px solid  #805AD5;\r\n}\r\n\r\n.carousel {\r\n    text-align: center;\r\n}\r\n\r\n.thumbs {\r\n    transform: translate3d(0px, 0px, 0px) !important;\r\n}\r\n\r\n.carousel::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 10px;\r\n}\r\n\r\n.carousel::-webkit-scrollbar-track {\r\n    background: linear-gradient(180deg, rgba(230, 230, 230, 0.5) 0%, rgba(255, 255, 255, 0.04) 100%);\r\n    border-radius: 5px;\r\n}\r\n\r\n.carousel::-webkit-scrollbar-thumb {\r\n    background-color: #805AD5;\r\n    border-radius: 30px;\r\n    width: 200px;\r\n}","",{version:3,sources:["webpack://./src/components/Slider/Slider.css"],names:[],mappings:"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;;AAE9B;AACA;;GAEG;AACH;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,gGAAgG;IAChG,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB",sourcesContent:[".slider {\r\n    border-radius: 10px;\r\n}\r\n\r\n.carousel .slider-wrapper {\r\n    max-width: 50%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.carousel .slider-wrapper .slider {\r\n    align-items: center;\r\n}\r\n\r\n.carousel .slider-wrapper img {\r\n    border: 4px solid  #3b2c5c;\r\n\r\n}\r\n/* .thumb img {\r\n    height: 40px;\r\n} */\r\n.control-dots {\r\n    display: none;\r\n}\r\n\r\n.carousel .thumb {\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    border: 3px solid transparent;\r\n}\r\n\r\n.carousel-root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.carousel-root p {\r\n    display: none;\r\n}\r\n\r\n.thumbs-wrapper .control-arrow {\r\n    display: none;\r\n}\r\n\r\n.carousel {\r\n    max-width: 800px;\r\n    overflow-x: scroll;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.thumbs-wrapper {\r\n    overflow: visible !important;\r\n}\r\n\r\n.carousel .thumb.selected,\r\n.carousel .thumb:hover {\r\n    border: 3px solid  #805AD5;\r\n}\r\n\r\n.carousel {\r\n    text-align: center;\r\n}\r\n\r\n.thumbs {\r\n    transform: translate3d(0px, 0px, 0px) !important;\r\n}\r\n\r\n.carousel::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 10px;\r\n}\r\n\r\n.carousel::-webkit-scrollbar-track {\r\n    background: linear-gradient(180deg, rgba(230, 230, 230, 0.5) 0%, rgba(255, 255, 255, 0.04) 100%);\r\n    border-radius: 5px;\r\n}\r\n\r\n.carousel::-webkit-scrollbar-thumb {\r\n    background-color: #805AD5;\r\n    border-radius: 30px;\r\n    width: 200px;\r\n}"],sourceRoot:""}]),n.default=t},9421:function(r,n,e){var A=e(3379),o=e.n(A),a=e(7795),t=e.n(a),l=e(569),s=e.n(l),i=e(3565),u=e.n(i),c=e(9216),d=e.n(c),p=e(4589),b=e.n(p),m=e(4955),h={};h.styleTagTransform=b(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=t(),h.insertStyleElement=d();var B=o()(m.default,h);if(!m.default.locals||r.hot.invalidate){var C=!m.default.locals,f=C?m:m.default.locals;r.hot.accept(4955,function(n){m=e(4955),function(r,n,e){if(!r&&n||r&&!n)return!1;var A;for(A in r)if((!e||"default"!==A)&&r[A]!==n[A])return!1;for(A in n)if(!(e&&"default"===A||r[A]))return!1;return!0}(f,C?m:m.default.locals,C)?(f=C?m:m.default.locals,B(m.default)):r.hot.invalidate()}.bind(this))}r.hot.dispose((function(){B()}));m.default&&m.default.locals&&m.default.locals}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiMklBVU1BLEcsZ0JBQVMsU0FBSCxHQUFnQyxJQUExQkMsRUFBTSxFQUFOQSxPQUNSQyxHQUFTQyxFQUFBQSxFQUFBQSxRQUFtQixNQUU1QkMsR0FBZUMsRUFBQUEsRUFBQUEsY0FBWSxTQUFDQyxHQUM5QkosRUFBT0ssUUFBUUMsbUJBQW1CQyxTQUFTLEdBQUdDLFdBQXFDLElBQXhCQyxLQUFLQyxNQUFNTixFQUFRLEVBQ2xGLEdBQUcsSUFFR08sR0FBU0MsRUFBQUEsRUFBQUEsVUFBUSxXQUNuQixPQUFPYixFQUFPYyxLQUFJLFNBQUFDLEdBQUssT0FDbkIsdUJBQUtDLElBQUtELEVBQU1FLElBQUtDLE9BQVFILEVBQU1JLE9BQVFDLElBQUksT0FBT0MsU0FBUyxjQUFjLEdBRXJGLEdBQUcsQ0FBQ3JCLElBRUosT0FDSSxnQkFBQyxLQUFRLENBQUNzQixVQUFVLFNBQVNDLGNBQWMsRUFBTUMsSUFBS3ZCLEVBQVF3QixTQUFVdEIsRUFBY3VCLGFBQWMsa0JBQU1kLENBQU0sR0FDM0dBLEVBR2IsR0FFQSxXQUFlZSxFQUFBQSxFQUFBQSxNQUFLNUIsRSwrREMzQmhCNkIsRSxNQUEwQixHQUE0QixLQUUxREEsRUFBd0JDLEtBQUssQ0FBQ0MsRUFBT0MsR0FBSSxxZ0RBQXNnRCxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyxnREFBZ0QsTUFBUSxHQUFHLFNBQVcsOGhCQUE4aEIsZUFBaUIsQ0FBQyxzZ0RBQXNnRCxXQUFhLE1BRW50SCxXLHNKQ0lJQyxFQUFVLENBQUMsRUFFZkEsRUFBUUMsa0JBQW9CLElBQzVCRCxFQUFRRSxjQUFnQixJQUVsQkYsRUFBUUcsT0FBUyxTQUFjLEtBQU0sUUFFM0NILEVBQVFJLE9BQVMsSUFDakJKLEVBQVFLLG1CQUFxQixJQUU3QixJQUFJQyxFQUFTLElBQUksVUFBU04sR0FJeEIsSUFBSyxrQkFBa0JGLEVBQU9TLElBQUlDLFdBQVksQ0FDNUMsSUErQklDLEdBQWlCLGlCQUNqQkMsRUFBWUQsRUFBZ0IsRUFBYyxpQkFFOUNYLEVBQU9TLElBQUlJLE9BQ1QsS0FDQSxzQkFwQ2tCLFNBQXVCQyxFQUFHQyxFQUFHSixHQUNuRCxJQUFLRyxHQUFLQyxHQUFLRCxJQUFNQyxFQUNuQixPQUFPLEVBR1QsSUFBSUMsRUFFSixJQUFLQSxLQUFLRixFQUNSLEtBQUlILEdBQXVCLFlBQU5LLElBS2pCRixFQUFFRSxLQUFPRCxFQUFFQyxHQUNiLE9BQU8sRUFJWCxJQUFLQSxLQUFLRCxFQUNSLEtBQUlKLEdBQXVCLFlBQU5LLEdBS2hCRixFQUFFRSxJQUNMLE9BQU8sRUFJWCxPQUFPLENBQ1QsQ0FPYUMsQ0FBY0wsRUFBV0QsRUFBZ0IsRUFBYyxpQkFBZ0JBLElBTXRFQyxFQUFZRCxFQUFnQixFQUFjLGlCQUUxQ0gsRUFBTyxZQVBMUixFQUFPUyxJQUFJQyxZQVFwQixhQUVMLENBRUFWLEVBQU9TLElBQUlTLFNBQVEsV0FDakJWLEdBQ0YsSUFLb0IsV0FBVyxrQkFBaUIsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9ub2RlLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Rfbm9kZS8uL3NyYy9jb21wb25lbnRzL1NsaWRlci9TbGlkZXIuY3NzIiwid2VicGFjazovL3JlYWN0X25vZGUvLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmNzcz9iYzVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiXHJcblxyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiXHJcbmltcG9ydCAnLi9TbGlkZXIuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlclByb3BzIHtcclxuICAgIGltYWdlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdXHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlciA9ICh7IGltYWdlcyB9OiBTbGlkZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsID0gdXNlUmVmPGFueSB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzY3JvbGwuY3VycmVudC5jYXJvdXNlbFdyYXBwZXJSZWYuY2hpbGRyZW5bMV0uc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoaW5kZXggLyA5KSAqIDgwMCBcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHRodW1icyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbWFnZXMubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgPGltZyBrZXk9e2ltYWdlLl9pZH0gc3JjU2V0PXtpbWFnZS5pbWdVcmx9IGFsdD1cImxvZ29cIiBpdGVtVHlwZT1cImltYWdlL3dlYnBcIi8+XHJcbiAgICAgICAgKSlcclxuICAgIH0sIFtpbWFnZXNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsIGNsYXNzTmFtZT1cInNsaWRlclwiIGluZmluaXRlTG9vcD17dHJ1ZX0gcmVmPXtzY3JvbGx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlbmRlclRodW1icz17KCkgPT4gdGh1bWJzfT5cclxuICAgICAgICAgICAge3RodW1ic31cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNsaWRlcikiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIC5zbGlkZXItd3JhcHBlciAuc2xpZGVyIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIC5zbGlkZXItd3JhcHBlciBpbWcge1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAgIzNiMmM1YztcXHJcXG5cXHJcXG59XFxyXFxuLyogLnRodW1iIGltZyB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG59ICovXFxyXFxuLmNvbnRyb2wtZG90cyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCAudGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1yb290IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsLXJvb3QgcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aHVtYnMtd3JhcHBlciAuY29udHJvbC1hcnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCB7XFxyXFxuICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi50aHVtYnMtd3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCAudGh1bWIuc2VsZWN0ZWQsXFxyXFxuLmNhcm91c2VsIC50aHVtYjpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICAjODA1QUQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aHVtYnMge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkgMTAwJSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDVBRDU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCOztBQUU5QjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnR0FBZ0c7SUFDaEcsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwgLnNsaWRlci13cmFwcGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIC5zbGlkZXItd3JhcHBlciAuc2xpZGVyIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIC5zbGlkZXItd3JhcHBlciBpbWcge1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAgIzNiMmM1YztcXHJcXG5cXHJcXG59XFxyXFxuLyogLnRodW1iIGltZyB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG59ICovXFxyXFxuLmNvbnRyb2wtZG90cyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCAudGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1yb290IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsLXJvb3QgcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aHVtYnMtd3JhcHBlciAuY29udHJvbC1hcnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCB7XFxyXFxuICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi50aHVtYnMtd3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbCAudGh1bWIuc2VsZWN0ZWQsXFxyXFxuLmNhcm91c2VsIC50aHVtYjpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICAjODA1QUQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aHVtYnMge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkgMTAwJSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDVBRDU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiU2xpZGVyIiwiaW1hZ2VzIiwic2Nyb2xsIiwidXNlUmVmIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsImN1cnJlbnQiLCJjYXJvdXNlbFdyYXBwZXJSZWYiLCJjaGlsZHJlbiIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJ0aHVtYnMiLCJ1c2VNZW1vIiwibWFwIiwiaW1hZ2UiLCJrZXkiLCJfaWQiLCJzcmNTZXQiLCJpbWdVcmwiLCJhbHQiLCJpdGVtVHlwZSIsImNsYXNzTmFtZSIsImluZmluaXRlTG9vcCIsInJlZiIsIm9uQ2hhbmdlIiwicmVuZGVyVGh1bWJzIiwibWVtbyIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwib3B0aW9ucyIsInN0eWxlVGFnVHJhbnNmb3JtIiwic2V0QXR0cmlidXRlcyIsImluc2VydCIsImRvbUFQSSIsImluc2VydFN0eWxlRWxlbWVudCIsInVwZGF0ZSIsImhvdCIsImludmFsaWRhdGUiLCJpc05hbWVkRXhwb3J0Iiwib2xkTG9jYWxzIiwiYWNjZXB0IiwiYSIsImIiLCJwIiwiaXNFcXVhbExvY2FscyIsImRpc3Bvc2UiXSwic291cmNlUm9vdCI6IiJ9