//! danh sách nhân viên


function DanhSachNV (){
    this.mangNV = [];
    this.themNV = function(nv){
        this.mangNV.push(nv);

    }

    this.viTriNhanVien = function(tknv){
        var viTri = -1;
        this.mangNV.map(function(nv,index){
            if(nv.taiKhoang === tknv){
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
    
    this.capNhat = function(tknv){
        var viTri = this.viTriNhanVien(tknv);
        if(viTri > -1){
            dsnv.mangNV[viTri] = nv;

        }

    }

}