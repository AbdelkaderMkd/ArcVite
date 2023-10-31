import{bc as G,aA as r,bF as T,bG as o,bH as a,bI as F}from"./index-383689b1.js";function A(f,s){const{textureFloat:e,colorBufferFloat:t}=f.capabilities,_=e==null?void 0:e.textureFloat,h=e==null?void 0:e.textureFloatLinear,b=e==null?void 0:e.textureHalfFloat,c=e==null?void 0:e.textureHalfFloatLinear,E=e==null?void 0:e.HALF_FLOAT,m=t==null?void 0:t.textureFloat,l=t==null?void 0:t.textureHalfFloat,p=t==null?void 0:t.floatBlend,n=G(f.driverTest).floatBufferBlend.result;if(!_&&!b)throw new r("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");if(!m&&!l)throw new r("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(p&&n||l))throw new r("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(n?"":" This device claims support for EXT_float_blend, but does not actually support it."));const R=_&&m&&p&&n,L=b&&l,i=h,u=c,d=!!(t!=null&&t.R32F),x=!!(t!=null&&t.R16F);if(R&&(i||!u))return i||s.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),{dataType:T.FLOAT,samplingMode:i?o.LINEAR:o.NEAREST,pixelFormat:d?a.RED:a.RGBA,internalFormat:d?F.R32F:a.RGBA};if(L)return u||s.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),{dataType:E,samplingMode:u?o.LINEAR:o.NEAREST,pixelFormat:x?a.RED:a.RGBA,internalFormat:x?F.R16F:a.RGBA};throw new r("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}export{A as n};