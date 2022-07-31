

var dsnv = new DanhSachNV();
// var validation = new Validation();

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
            <button class="btn btn-info" onclick = "xemChiTiec('${nv.taikhoang}')">Xem</button>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taikhoang}')">Xoá</button>
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

        getELE("tknv").value = nvCanTim.tk;
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

    var nv = new NhanVien(tk, tenNV, email, password, ngaylam, luongCB, chucvu, gioLam)
    nv.TinhLuong()
    nv.XepLoaiNV()
    dsnv.capNhat(nv)
    hienThiDS(dsnv.mangNV)
    console.log(nv)
    setLocalStorage();
    // resetForm();
}


function resetForm() {
    getELE("formNV").reset();
    getELE("tknv").disabled = false;
}