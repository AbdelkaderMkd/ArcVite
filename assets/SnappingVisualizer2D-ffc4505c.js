import{fT as m,fU as d,fV as s,fW as M,fX as S,fY as o,fZ as l,cd as y,cT as n,b9 as u,cE as I,f_ as c,f$ as g,g0 as p,cc as x}from"./index-383689b1.js";import{o as h}from"./settings-91f7b4a5.js";import{r as P}from"./SnappingContext-c6804e8e.js";class T extends P{constructor(e){super(),this._graphicsLayer=e}visualizeIntersectionPoint(e,r){return this._visualizeSnappingIndicator(new y({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:r.spatialReference}),C)}visualizePoint(e,r){return this._visualizeSnappingIndicator(new y({x:e.point[0],y:e.point[1],spatialReference:r.spatialReference}),L)}visualizeLine(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.spatialReference}),z)}visualizeParallelSign(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.spatialReference}),v)}visualizeRightAngleQuad(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:r.spatialReference}),w(e))}_visualizeSnappingIndicator(e,r){const t=new u({geometry:e,symbol:r});return this._graphicsLayer.add(t),I(()=>{this._graphicsLayer.remove(t)})}}const a=h.main.toArray(),f=[...h.main.toRgb(),100],C=new m({outline:new d({width:1.5,color:a}),size:15,color:[0,0,0,0]}),L=new m({outline:{width:.5,color:[0,0,0,1]},size:10,color:a}),z=new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:M.Butt,joinStyle:S.Round,miterLimit:10,width:o(l.lineHintWidthTarget),color:a}]}}}),v=new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:a}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:a}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),b=i=>new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:o(l.rightAngleHintSize),rotation:i,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:o(l.rightAngleHintOutlineSize),color:a},{type:"CIMSolidFill",enable:!0,color:f}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),R=b(45),k=b(225),w=(()=>{const i=p(),e=p(),r=x();return t=>(c(i,t.centerVertex,t.previousVertex),c(e,t.nextVertex,t.previousVertex),g(r,i,e),r[2]<0?R:k)})();export{T as u};