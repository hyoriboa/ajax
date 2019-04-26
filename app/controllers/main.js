


$(document).ready(function () {

    var nguoiDungService = new NguoiDungSerVice();

    layDanhSachNguoiDung();

    function getInput(title, btnTitle, btnID, btnClass) {
        $('.modal-title').html(title);
        var footer = `
            <button id="${btnID}" class="btn btn-${btnClass}">${btnTitle}</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        `;
        $('.modal-footer').html(footer);
    }


    $('#btnThemNguoiDung').click(function(){
        getInput('Thêm người dùng', 'Thêm', 'btnThem','success');
    });

    $('body').delegate('.btnSua', 'click', function () {
        getInput('Sửa người dùng', 'Cập nhật', 'btnCapNhat','primary');

        var taiKhoan = $(this).data('taikhoan');
        var viTri = nguoiDungService.layViTriNguoiDung(taiKhoan);
        

    })

    $('body').delegate('#btnThem', 'click', function(){
        var taiKhoan = $('#TaiKhoan').val();
        var hoTen = $('#HoTen').val();
        var matKhau = $('#MatKhau').val();
        var email = $('#Email').val();
        var soDT = $('#SoDienThoai').val();
        var loaiNguoiDung = $('#loaiNguoiDung').val();

        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, matKhau, soDT, loaiNguoiDung);
        nguoiDungService.themNguoiDung(nguoiDung);

        $('.close').trigger('click');

    })

    $('body').delegate('.btnXoa', 'click', function(){
        var taiKhoan = $(this).data('taikhoan');
        nguoiDungService.xoaNguoiDung(taiKhoan);
        
    })

    $('#txtTimKiem').keyup(function(){
        var mangTimKiem = []
        var taiKhoan = $('#txtTimKiem').val();
        mangTimKiem = nguoiDungService.timKiemNguoiDung(taiKhoan);
        taoBang(mangTimKiem);
    })

    function layDanhSachNguoiDung() {
        // nguoiDungService.layDanhSachNguoiDung();

        //cach2: tao bang ben ham main.js
        nguoiDungService.layDanhSachNguoiDung()
            .done(function (res) {
                taoBang(res);
                localStorage.setItem('danhSachNguoiDung', JSON.stringify(res));
            })
            .fail(function (err) {
                console.log(err);
            })
    }

    function taoBang(danhSachNguoiDung) {
        var tblBody = "";

        danhSachNguoiDung.map(function (item, index) {
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
                    <button class="btnSua  btn btn-primary" data-toggle="modal" data-target="#myModal">Sửa</button>
                    <button class="btnXoa  btn btn-danger" data-taikhoan="${item.TaiKhoan}">Xóa</button>
                </td>
            </tr>
            `
        });

        $('#tblDanhSachNguoiDung').html(tblBody);
    }


})

