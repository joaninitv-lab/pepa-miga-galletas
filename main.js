const scene=document.querySelector('.hero .scene');
if(scene && !matchMedia('(prefers-reduced-motion: reduce)').matches){
 scene.addEventListener('pointermove',e=>{
 const box=scene.getBoundingClientRect();
 scene.style.setProperty('--tilt',((e.clientX-box.left)/box.width-.5)*7+'deg');
 });
 scene.addEventListener('pointerleave',()=>scene.style.setProperty('--tilt','0deg'));
}
document.querySelector('form')?.addEventListener('submit',event=>{
 event.preventDefault();
 const form=event.currentTarget;
 const fields=new FormData(form);
 const message='Consulta para Pepa Miga\n\n'+fields.get('nombre')+'\n'+fields.get('correo')+'\n\n'+fields.get('mensaje');
 const url=URL.createObjectURL(new Blob([message],{type:'text/plain;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download='consulta-pepa-miga.txt';a.click();
 setTimeout(()=>URL.revokeObjectURL(url),5000);
 form.querySelector('output').textContent='Borrador preparado para descargar.';
});
