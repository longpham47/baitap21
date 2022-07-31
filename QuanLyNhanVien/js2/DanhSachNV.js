//! danh sách nhân viên


function DanhSachNV (){
    this.mangNV = [];
    this.themNV = function(nv){
        this.mangNV.push(nv);

    }

    this.viTriNhanVien = function(tknv){
        var viTri = -1;
        this.mangNV.map(function(nv,index){
            if(nv.taikhoang === tknv){
                viTri = index;
            }
        })
        return viTri;

    }

    this.Xoa = function(tknv){
        var viTri = this.viTriNhanVien(tknv);
        if(viTri > -1){
            this.mangNV.splice(viTri,1);
        }
    }
    
    this.capNhat = function(nv){
        var viTri = this.viTriNhanVien(nv.tk);
        if(viTri > -1){
            dsnv.mangNV[viTri] = nv;

        }

    }

}