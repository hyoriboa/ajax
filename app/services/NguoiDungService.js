

function NguoiDungSerVice(){

    this.layDanhSachNguoiDung = function(){
        //cach2: tao bang ben ham main.js

        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"   
        })

        // $.ajax({
        //     url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
        //     type: "GET"   
        // })
        // .done(function(res){
        //     // taoBang(res);

        // })
        // .fail(function(err){
        //     console.log(err);
        // })
    }

    this.themNguoiDung = function(nguoiDung){
        $.ajax({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
            type: 'POST',
            data: nguoiDung
        })
        .done(function(res){
            if(res ==='tai khoan da ton tai !'){
                alert(res);
            } else {
                //đứng trang nào load trang đó
                // location.reload();
                //tới trang khác
                // location.href = "link cần";
                location.href = "";
            }
            
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.xoaNguoiDung = function(taikhoan){
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taikhoan}`,
            type: 'DELETE'
        })
        .done(function(res){
            location.reload();
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.timKiemNguoiDung = function(chuoiTimKiem){
        var mangTimKiem = []
        var dsnd = JSON.parse(localStorage.getItem('danhSachNguoiDung'));
        dsnd.map(function(item){
            if(item.TaiKhoan.toLowerCase().indexOf(chuoiTimKiem.toLowerCase().trim()) !== -1){
                mangTimKiem.push(item);
            }
        })
        return mangTimKiem;
    }

}






/*
function taoBang(danhSachNguoiDung){
    var tblBody = "";

    danhSachNguoiDung.map(function(item, index){
        tblBody += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.TaiKhoan}</td>
            <td>${item.MatKhau}</td>
            <td>${item.HoTen}</td>
            <td>${item.Email}</td>
            <td>${item.SoDT}</td>
            <td>${item.TenLoaiNguoiDung}</td>
            <td>
                <button id="btnSua" class="btn btn-primary">Sửa</button>
                <button id="btnXoa" class="btn btn-danger">Xóa</button>
            </td>
        </tr>
        `
    });


    // for (var i = 0; i < danhSachNguoiDung.length; i++) {
    //     tblBody += `
    //     <tr>
    //         <td>${i+1}</td>
    //         <td>${danhSachNguoiDung[i].TaiKhoan}</td>
    //         <td>${danhSachNguoiDung[i].MatKhau}</td>
    //         <td>${danhSachNguoiDung[i].HoTen}</td>
    //         <td>${danhSachNguoiDung[i].Email}</td>
    //         <td>${danhSachNguoiDung[i].SoDT}</td>
    //         <td>${danhSachNguoiDung[i].TenLoaiNguoiDung}</td>
    //     </tr>
    //     `;
    // }

    $('#tblDanhSachNguoiDung').html(tblBody);
}

*/




