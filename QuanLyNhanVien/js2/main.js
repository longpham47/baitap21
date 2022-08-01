

var dsnv = new DanhSachNV();
var validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}



function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getlocalStorage() {
    if (localStorage.getItem("DSNV") != undefined) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));

    }
    hienThiDS(dsnv.mangNV);
}
getlocalStorage();



function themNhanVien() {
    var tk = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucvu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;
    isValid &= validation.checkEmpty(tk,"tbTKNV","tài khoảng không được đẻ trống")
    && validation.checkID(tk,"tbTKNV","tài khoang không được trùng",dsnv.mangNV);

    isValid &= validation.checkEmpty(tenNV, "tbTen", "TênNV không được để trống")
    && validation.checkName(tenNV, "tbTen", "Tên NV chỉ được chứa ký tự chữ");
    
    isValid &= validation.checkEmpty(email, "tbEmail", "Email nv không được để trống")
    && validation.checkEmail(email, "tbEmail", "Email nv chưa đúng định dạng");

    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "lương cơ bảng không được để trống")
    && validation.checkScore(luongCB, "tbLuongCB", "lương cơ bảng chưa đúng định dạng");

    isValid &= validation.checkEmpty(password, "tbMatKhau", "Pass nv không được để trống")
    && validation.checkPass(password, "tbMatKhau", "Pass cần ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, độ dài từ 6-8 ký tự");

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "giờ làm không được để trống")
    && validation.checkScore(gioLam, "tbGiolam", "giờ làm chưa đúng định dạng");

    isValid &= validation.checkDropDown("chucvu", "tbChucVu", "chức vụ chưa được chọn");


    if (isValid) {
        var nv = new NhanVien(tk, tenNV, email, password, ngaylam, luongCB, chucvu, gioLam)

        nv.TinhLuong();
        nv.XepLoaiNV()
        dsnv.themNV(nv);
        hienThiDS(dsnv.mangNV);
        setLocalStorage();
        resetForm();
    }



}



function hienThiDS(mangNV) {
    var content = "";
    mangNV.map(function (nv, index) {
        content += `
        <tr>
            <td>${nv.taikhoang}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngaylam}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
            <button data-toggle="modal" data-target="#myModal" class="btn btn-info" onclick="xemChiTiec('${nv.taikhoang}')">Xem</button>
            <button  class="btn btn-danger" onclick="xoaNhanVien('${nv.taikhoang}')">Xoá</button>
            </td>
        </tr>
        `;
    })
    // console.log(content)
    getELE("tableDanhSach").innerHTML = content;
}


function xoaNhanVien(tknv) {
    // console.log(tknv)
    dsnv.Xoa(tknv)
    hienThiDS(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
}


function xemChiTiec(tknv) {
    var viTri = dsnv.viTriNhanVien(tknv);
    if (viTri > -1) {
        var nvCanTim = dsnv.mangNV[viTri];

        getELE("tknv").value = nvCanTim.taikhoang;
        getELE("tknv").disabled = true;

        getELE("name").value = nvCanTim.tenNV;
        getELE("email").value = nvCanTim.email;
        getELE("password").value = nvCanTim.password;
        getELE("datepicker").value = nvCanTim.ngaylam;
        getELE("luongCB").value = nvCanTim.luongCB;
        getELE("chucvu").value = nvCanTim.chucvu;
        getELE("gioLam").value = nvCanTim.gioLam;
    }
}


function capNhatNhanVien() {
    var tk = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucvu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var nv = new NhanVien(tk, tenNV, email, password, ngaylam, luongCB, chucvu, gioLam);
    nv.TinhLuong();

    nv.XepLoaiNV();
    console.log(nv)
    dsnv.capNhat(nv);
    console.log(dsnv.mangNV);
    hienThiDS(dsnv.mangNV);
    
    setLocalStorage(dsnv.mangNV);
    resetForm();
}


function resetForm() {
    getELE("formNV").reset();
    getELE("tknv").disabled = false;
}