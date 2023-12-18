import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  title1: string = "iLlo";
  title2: string = "RaNk";

  imgRoute: string = "./assets/img/";

  concursantes = [
    { imagen: "https://i.imgur.com/iT2gtvr.png", titulo: 'GuiLle', spanText: '', comodines: "", link: "https://www.youtube.com/watch?v=7GG7j_w0uE8", winner: true, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/saLeptn.png", titulo: 'JoRdi', spanText: '', comodines: "", link: "https://youtu.be/L-6cp42HFn4?si=lB3Vm9pCXGObgTDu&t=7800", winner: true, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/uUt13BS.png", titulo: 'sekIAm', spanText: '', comodines: "", link: "https://youtu.be/L-6cp42HFn4?si=6RlJOjmfZsXDno0Q&t=15448", winner: true, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/tl4xMWK.png", titulo: 'Nil, Misho y Guanyar', spanText: '15', comodines: "", link: "https://www.youtube.com/watch?v=CoO5eCRjz2M", winner: false, cagao: false, large: true, joan: false},
    { imagen: "https://i.imgur.com/4DTzqjc.png", titulo: 'SpReeN', spanText: '14', comodines: "", link: "https://youtu.be/CB3eIcil7D4?si=TgLUxpZjMz63IlhH&t=15569", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/zQgbKNb.png", titulo: 'Caliebre', spanText: '14', comodines: "", link: "https://youtu.be/bcmUGd4cI1g?si=anpg3ZXzYUh_Yuvd&t=13013", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/wyvIzsD.png", titulo: 'tRece', spanText: '13', comodines: "", link: "https://www.youtube.com/watch?v=L-6cp42HFn4", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/TpbRXDF.png", titulo: 'foRisTa', spanText: '13', comodines: "", link: "https://youtu.be/VcMBqbHE2-w?si=5CNdSoJPJ95bqvYM&t=745", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/fM2BygB.png", titulo: 'ZeroNetH', spanText: '13', comodines: "", link: "https://youtu.be/VcMBqbHE2-w?si=ArwFdlSVY-D8Vrn3&t=15496", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/WeRRP62.png", titulo: 'SPOK', spanText: '13', comodines: "", link: "https://youtu.be/i2O9O_mJZUU?si=1HEX6zzC6FVPjoqh&t=4812", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/siM9Cge.png", titulo: 'iBai', spanText: '13', comodines: "", link: "https://youtu.be/bcmUGd4cI1g?si=CxiHkkhkQxNtrIX3&t=4733", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/JiCnB7O.png", titulo: 'PaNDa', spanText: '13', comodines: "", link: "https://youtu.be/i2O9O_mJZUU?si=Iue7rYx_E3qj5Vyk&t=11133", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/zFMsIIA.png", titulo: 'BaiTY', spanText: '13', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=b3aG8y5h1aXyRF_v&t=7323", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/utv0tZd.png", titulo: 'PacHo', spanText: '12', comodines: "", link: "https://youtu.be/VcMBqbHE2-w?si=vTOYHMI1T4VcxWPE&t=11321", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/zwMC14W.png", titulo: 'RevenaNt', spanText: '13', comodines: "", link: "https://youtu.be/oaOD7SxnS1o?si=Z6AInK5kO5u2UY4A&t=6686", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/Vj88TmV.png", titulo: 'foLaGor', spanText: '12', comodines: "", link: "https://youtu.be/CB3eIcil7D4?si=5CNUcnxvwTglf4zW", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/QarGvNV.png", titulo: 'BaRbe', spanText: '12', comodines: "", link: "https://www.youtube.com/watch?v=bcmUGd4cI1g", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/rMRE3pb.png", titulo: 'TiRion', spanText: '12', comodines: "", link: "https://youtu.be/oaOD7SxnS1o?si=dsl14M2ixn5KIUkC", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/dMoGGDN.png", titulo: 'siNapsis', spanText: '12', comodines: "", link: "https://youtu.be/bo6nGTIVyPU?si=D2pVMrPejwEXh9oN&t=10124", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/lAaxfWO.png", titulo: 'WolFeR', spanText: '12', comodines: "", link: "https://youtu.be/bo6nGTIVyPU?si=Qs8vCfFo-YnSdDBG&t=14425", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/qrFvONm.png", titulo: 'aLeX', spanText: '12', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=D8voIG8ZPvafayx4&t=4517", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/1ad5sQq.png", titulo: 'Gavi', spanText: '11', comodines: "", link: "https://youtu.be/bo6nGTIVyPU?si=VlPmElldJX9PTCJ3&t=5244", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/9xADEzf.png", titulo: 'SuZy', spanText: '11', comodines: "", link: "https://youtu.be/CB3eIcil7D4?si=yHxVM7YSiSqwLF8V&t=8264", winner: false, cagao: true, large: false, joan: false},
    { imagen: "https://i.imgur.com/pC1MlBR.png", titulo: 'Joan Pradells', spanText: '10', comodines: "", link: "https://www.youtube.com/watch?v=i2O9O_mJZUU", winner: false, cagao: false, large: true, joan: true},
    { imagen: "https://i.imgur.com/KNnG3rL.png", titulo: 'Juja', spanText: '10', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=JT3E1a7i6CkPuM8z&t=457", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/2WNeqfe.png", titulo: 'PavLo', spanText: '10', comodines: "", link: "https://youtu.be/_mbdQYAbT7M?si=lGrKqdlfRrInHTfo&t=2562", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/54CWTzH.png", titulo: 'masi', spanText: '9', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=QyKdjfi8iyX6IReR&t=18666", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/E7t9OIZ.png", titulo: 'xoKas', spanText: '9', comodines: "", link: "https://youtu.be/_mbdQYAbT7M?si=SXk_vwawBwF3gQrx&t=9118", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/FUNtuQ6.png", titulo: 'jorge', spanText: '9', comodines: "", link: "https://youtu.be/oaOD7SxnS1o?si=boeA5Cl-O1h-GVl8&t=3348", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/Tt4ip4v.png", titulo: 'clobeR', spanText: '8', comodines: "", link: "https://youtu.be/_mbdQYAbT7M?si=VaqOg-hdXX_pjTBZ&t=5", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/H69G17n.png", titulo: 'MaRc', spanText: '8', comodines: "", link: "https://youtu.be/VcMBqbHE2-w?si=fUmiv0qn7jyu1ccl&t=8331", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/aSgDCL3.png", titulo: 'Andrés', spanText: '6', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=57vJVAkdfaYXaW4S&t=14281", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/CDZ7jjo.png", titulo: 'jorge', spanText: '6', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=n-zXQ3kDDuJFmP0_&t=3346", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/Ql7utKY.png", titulo: 'caRola', spanText: '6', comodines: "", link: "https://youtu.be/_mbdQYAbT7M?si=Ex6VEEa8It_Ir8BX&t=4963", winner: false, cagao: false, large: false, joan: false},
    { imagen: "https://i.imgur.com/BkVvTMb.png", titulo: 'wolfaNg', spanText: '2', comodines: "", link: "https://youtu.be/2E5e6fBNBbo?si=GEg-Ob4wkCIlkIBG&t=9793", winner: false, cagao: false, large: false, joan: false},
  
    
  ];
  
}
