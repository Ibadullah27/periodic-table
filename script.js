const elements = [
  [1,'H','Hydrogen','1.008','nonmetal'],[2,'He','Helium','4.0026','noble'],
  [3,'Li','Lithium','6.94','alkali'],[4,'Be','Beryllium','9.0122','alkaline'],[5,'B','Boron','10.81','metalloid'],[6,'C','Carbon','12.011','nonmetal'],[7,'N','Nitrogen','14.007','nonmetal'],[8,'O','Oxygen','15.999','nonmetal'],[9,'F','Fluorine','18.998','halogen'],[10,'Ne','Neon','20.180','noble'],
  [11,'Na','Sodium','22.990','alkali'],[12,'Mg','Magnesium','24.305','alkaline'],[13,'Al','Aluminium','26.982','post'],[14,'Si','Silicon','28.085','metalloid'],[15,'P','Phosphorus','30.974','nonmetal'],[16,'S','Sulfur','32.06','nonmetal'],[17,'Cl','Chlorine','35.45','halogen'],[18,'Ar','Argon','39.948','noble'],
  [19,'K','Potassium','39.098','alkali'],[20,'Ca','Calcium','40.078','alkaline'],[21,'Sc','Scandium','44.956','transition'],[22,'Ti','Titanium','47.867','transition'],[23,'V','Vanadium','50.942','transition'],[24,'Cr','Chromium','51.996','transition'],[25,'Mn','Manganese','54.938','transition'],[26,'Fe','Iron','55.845','transition'],[27,'Co','Cobalt','58.933','transition'],[28,'Ni','Nickel','58.693','transition'],[29,'Cu','Copper','63.546','transition'],[30,'Zn','Zinc','65.38','transition'],[31,'Ga','Gallium','69.723','post'],[32,'Ge','Germanium','72.630','metalloid'],[33,'As','Arsenic','74.922','metalloid'],[34,'Se','Selenium','78.971','nonmetal'],[35,'Br','Bromine','79.904','halogen'],[36,'Kr','Krypton','83.798','noble'],
  [37,'Rb','Rubidium','85.468','alkali'],[38,'Sr','Strontium','87.62','alkaline'],[39,'Y','Yttrium','88.906','transition'],[40,'Zr','Zirconium','91.224','transition'],[41,'Nb','Niobium','92.906','transition'],[42,'Mo','Molybdenum','95.95','transition'],[43,'Tc','Technetium','[98]','transition'],[44,'Ru','Ruthenium','101.07','transition'],[45,'Rh','Rhodium','102.91','transition'],[46,'Pd','Palladium','106.42','transition'],[47,'Ag','Silver','107.87','transition'],[48,'Cd','Cadmium','112.41','transition'],[49,'In','Indium','114.82','post'],[50,'Sn','Tin','118.71','post'],[51,'Sb','Antimony','121.76','metalloid'],[52,'Te','Tellurium','127.60','metalloid'],[53,'I','Iodine','126.90','halogen'],[54,'Xe','Xenon','131.29','noble'],
  [55,'Cs','Caesium','132.91','alkali'],[56,'Ba','Barium','137.33','alkaline'],[57,'La','Lanthanum','138.91','lanthanoid'],[72,'Hf','Hafnium','178.49','transition'],[73,'Ta','Tantalum','180.95','transition'],[74,'W','Tungsten','183.84','transition'],[75,'Re','Rhenium','186.21','transition'],[76,'Os','Osmium','190.23','transition'],[77,'Ir','Iridium','192.22','transition'],[78,'Pt','Platinum','195.08','transition'],[79,'Au','Gold','196.97','transition'],[80,'Hg','Mercury','200.59','transition'],[81,'Tl','Thallium','204.38','post'],[82,'Pb','Lead','207.2','post'],[83,'Bi','Bismuth','208.98','post'],[84,'Po','Polonium','[209]','post'],[85,'At','Astatine','[210]','halogen'],[86,'Rn','Radon','[222]','noble'],
  [87,'Fr','Francium','[223]','alkali'],[88,'Ra','Radium','[226]','alkaline'],[89,'Ac','Actinium','[227]','actinoid'],[104,'Rf','Rutherfordium','[267]','transition'],[105,'Db','Dubnium','[268]','transition'],[106,'Sg','Seaborgium','[269]','transition'],[107,'Bh','Bohrium','[270]','transition'],[108,'Hs','Hassium','[277]','transition'],[109,'Mt','Meitnerium','[278]','unknown'],[110,'Ds','Darmstadtium','[281]','unknown'],[111,'Rg','Roentgenium','[282]','unknown'],[112,'Cn','Copernicium','[285]','transition'],[113,'Nh','Nihonium','[286]','unknown'],[114,'Fl','Flerovium','[289]','unknown'],[115,'Mc','Moscovium','[290]','unknown'],[116,'Lv','Livermorium','[293]','unknown'],[117,'Ts','Tennessine','[294]','unknown'],[118,'Og','Oganesson','[294]','unknown'],
  [58,'Ce','Cerium','140.12','lanthanoid'],[59,'Pr','Praseodymium','140.91','lanthanoid'],[60,'Nd','Neodymium','144.24','lanthanoid'],[61,'Pm','Promethium','[145]','lanthanoid'],[62,'Sm','Samarium','150.36','lanthanoid'],[63,'Eu','Europium','151.96','lanthanoid'],[64,'Gd','Gadolinium','157.25','lanthanoid'],[65,'Tb','Terbium','158.93','lanthanoid'],[66,'Dy','Dysprosium','162.50','lanthanoid'],[67,'Ho','Holmium','164.93','lanthanoid'],[68,'Er','Erbium','167.26','lanthanoid'],[69,'Tm','Thulium','168.93','lanthanoid'],[70,'Yb','Ytterbium','173.05','lanthanoid'],[71,'Lu','Lutetium','174.97','lanthanoid'],
  [90,'Th','Thorium','232.04','actinoid'],[91,'Pa','Protactinium','231.04','actinoid'],[92,'U','Uranium','238.03','actinoid'],[93,'Np','Neptunium','[237]','actinoid'],[94,'Pu','Plutonium','[244]','actinoid'],[95,'Am','Americium','[243]','actinoid'],[96,'Cm','Curium','[247]','actinoid'],[97,'Bk','Berkelium','[247]','actinoid'],[98,'Cf','Californium','[251]','actinoid'],[99,'Es','Einsteinium','[252]','actinoid'],[100,'Fm','Fermium','[257]','actinoid'],[101,'Md','Mendelevium','[258]','actinoid'],[102,'No','Nobelium','[259]','actinoid'],[103,'Lr','Lawrencium','[266]','actinoid']
];

const categoryNames = {alkali:'Alkali metal',alkaline:'Alkaline earth metal',transition:'Transition metal',post:'Post-transition metal',metalloid:'Metalloid',nonmetal:'Reactive nonmetal',halogen:'Halogen',noble:'Noble gas',lanthanoid:'Lanthanide',actinoid:'Actinide',unknown:'Unknown properties'};
const positions = new Map();
const mainRows = [
  [[1,1],[18,1]], [[1,2],[2,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2]],
  [[1,3],[2,3],[13,3],[14,3],[15,3],[16,3],[17,3],[18,3]],
  Array.from({length:18},(_,i)=>[i+1,4]), Array.from({length:18},(_,i)=>[i+1,5]),
  [[1,6],[2,6],...[...Array(15)].map((_,i)=>[i+4,6]),...[...Array(6)].map((_,i)=>[i+13,6])],
  Array.from({length:18},(_,i)=>[i+1,7])
];
// Main table rows: f-block slots are reserved for the two detached series.
for(let period=1;period<=7;period++) {
  if(period===1) { positions.set(1,[1,1]); positions.set(2,[18,1]); continue; }
  if(period===2||period===3) { for(let g=1;g<=2;g++) positions.set((period===2?3:11)+g-1,[g,period]); for(let g=13;g<=18;g++) positions.set((period===2?5:13)+g-13,[g,period]); continue; }
  const start=(period===4?19:period===5?37:period===6?55:87);
  positions.set(start,[1,period]); positions.set(start+1,[2,period]);
  if(period===6) { positions.set(57,[3,period]); for(let g=4;g<=18;g++) positions.set(72+g-4,[g,period]); }
  else if(period===7) { positions.set(89,[3,period]); for(let g=4;g<=18;g++) positions.set(104+g-4,[g,period]); }
  else for(let g=3;g<=18;g++) positions.set(start+g-1,[g,period]);
}
for(let n=58;n<=71;n++) positions.set(n,[n-54,9]);
for(let n=90;n<=103;n++) positions.set(n,[n-86,10]);

const grid=document.querySelector('#periodic-table');
const detail=document.querySelector('#detail');
const search=document.querySelector('#search');
const count=document.querySelector('#result-count');
function render(query='') {
  const q=query.trim().toLowerCase(); grid.replaceChildren();
  const filtered=elements.filter(e=>!q||String(e[0]).includes(q)||e[1].toLowerCase().includes(q)||e[2].toLowerCase().includes(q)||categoryNames[e[4]].toLowerCase().includes(q));
  count.textContent=`${filtered.length} of 118 elements`;
  for(const e of filtered) {
    const [num,symbol,name,mass,category]=e, pos=positions.get(num);
    const tile=document.createElement('button'); tile.type='button'; tile.className=`element ${category}`;
    tile.style.gridColumn=pos[0]; tile.style.gridRow=pos[1]; tile.setAttribute('aria-label',`${name}, atomic number ${num}`);
    tile.innerHTML=`<span class="atomic-number">${num}</span><span class="symbol">${symbol}</span><span class="element-name">${name}</span><span class="atomic-mass">${mass}</span>`;
    tile.addEventListener('click',()=>showDetail(e)); grid.append(tile);
  }
  if(!q) { addSeriesLabel('57–71','Lanthanides',3,8); addSeriesLabel('89–103','Actinides',3,9); }
  if(filtered.length===0) grid.innerHTML='<p class="empty-state">No elements found. Try a symbol, name, or atomic number.</p>';
}
function addSeriesLabel(range,label,col,row) { const el=document.createElement('div'); el.className='series-label'; el.style.gridColumn=col; el.style.gridRow=row; el.innerHTML=`<b>${range}</b><span>${label}</span>`; grid.append(el); }
function showDetail(e) { detail.innerHTML=`<span class="detail-number">${e[0]}</span><span class="detail-symbol">${e[1]}</span><div><h2>${e[2]}</h2><p>${categoryNames[e[4]]}</p><dl><div><dt>Atomic number</dt><dd>${e[0]}</dd></div><div><dt>Atomic mass</dt><dd>${e[3]} u</dd></div><div><dt>Category</dt><dd>${categoryNames[e[4]]}</dd></div></dl></div>`; detail.classList.add('has-selection'); }
search.addEventListener('input',()=>render(search.value));
document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';render();search.focus();});
document.addEventListener('keydown',event=>{
  if(event.key==='/' && document.activeElement!==search && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); }
  if(event.key==='Escape' && document.activeElement===search) { search.value=''; render(); search.blur(); }
});
render();
