

//! nhân viên

function NhanVien(tk, tenNV, email, password, ngaylam, luongCB, chucvu, gioLam) {
    this.taikhoang = tk;
    this.tenNV = tenNV;
    this.email = email;
    this.password = password;
    this.ngaylam = ngaylam;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";


    this.TinhLuong = function(){
        if(this.chucvu == "Sếp"){
            this.tongLuong = this.luongCB * 3;
        }else if(this.chucvu == "Trưởng phòng"){
            this.tongLuong = this.luongCB * 2;
        }else if(this.chucvu == "Nhân viên"){
            this.tongLuong = this.luongCB;
        }
    }

    this.XepLoaiNV = function(){
        if(this.gioLam >= 192){
            this.xepLoai =  "xuất sắc"

        }else if(this.gioLam >= 176){
           this.xepLoai = "giỏi"

        }else if(this.gioLam >= 160){
            this.xepLoai =  "khá"
        }else{
            this.xepLoai = "trung bình"
        }

    }
    



}

