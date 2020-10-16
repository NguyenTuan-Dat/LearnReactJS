import React from 'react';
import Post from './Post';

class Main extends React.Component {
    render() {
        var objRows = [];

        for (let i = 0; i < 8; i++) {
            objRows.push(<Post in="main" num={i} postContent={arrPost[i]} />);
        }

        return <tbody>{objRows}</tbody>;
    }
}

var arrPost = [];

arrPost.push(new creaetPost("Kết quả giới thiệu Trung ương khóa mới 'rất tốt đẹp'", "https://i1-vnexpress.vnecdn.net/2020/10/09/tbt-8732-1602221792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=HeDpbXbFXpU8q5WfXCB-tg", "Việc biểu quyết giới thiệu nhân sự Trung ương khóa mới đã đạt \"kết quả rất tốt đẹp\", theo Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng."));
arrPost.push(new creaetPost("Ngày hỗn loạn khiến kế hoạch tranh luận Trump - Biden bấp bênh", "https://i1-vnexpress.vnecdn.net/2020/10/09/trump-biden-1471-1602223867.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Hhnalip_kGMy9LF0MiZTNQ", "Ủy ban Tranh luận Tổng thống mở đầu ngày hỗn loạn 8/10 với tuyên bố hai ứng viên sẽ tham gia \"so găng ảo\" từ hai địa điểm tách biệt."));
arrPost.push(new creaetPost("5 công trình giao thông ở thủ đô sau 10 năm", "https://i1-vnexpress.vnecdn.net/2020/10/06/dai-lo1-1601974216.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=gY0N3pCQN8Zbv3cHbAZtng", "Đại lộ Thăng Long, cầu Vĩnh Tuy, đường Lê Văn Lương, cầu cạn Pháp Vân - Linh Đàm sau 10 năm khánh thành đã thay đổi diện mạo thủ đô."));
arrPost.push(new creaetPost("Lý do tân Thủ tướng Nhật chọn công du Việt Nam, Indonesia đầu tiên", "https://i1-vnexpress.vnecdn.net/2020/10/09/thu-tuong-nhat-thang-9-1-4258-1602238349.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=55MT-AM4tLGdVZn7fuz03Q", "Không chọn Mỹ như nhiều người tiền nhiệm, tân Thủ tướng Nhật Suga chọn Việt Nam và Indonesia cho chuyến công du đầu tiên kể từ khi lên nắm quyền."));
arrPost.push(new creaetPost("Hàng trăm ngôi nhà ngập sát nóc", "https://i1-vnexpress.vnecdn.net/2020/10/09/ngap-Quang-Binh01-1602257530.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=vP5_XyYeHkq8_YbIIjQIJQ", "Nước ngập 0,5 đến hơn 4 m khiến khoảng 2.000 hộ dân ở xã Tân Hóa, huyện Minh Hóa bị cô lập."));
arrPost.push(new creaetPost("Kết quả giới thiệu Trung ương khóa mới 'rất tốt đẹp'", "https://i1-vnexpress.vnecdn.net/2020/10/09/tbt-8732-1602221792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=HeDpbXbFXpU8q5WfXCB-tg", "Việc biểu quyết giới thiệu nhân sự Trung ương khóa mới đã đạt \"kết quả rất tốt đẹp\", theo Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng."));
arrPost.push(new creaetPost("Kết quả giới thiệu Trung ương khóa mới 'rất tốt đẹp'", "https://i1-vnexpress.vnecdn.net/2020/10/09/tbt-8732-1602221792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=HeDpbXbFXpU8q5WfXCB-tg", "Việc biểu quyết giới thiệu nhân sự Trung ương khóa mới đã đạt \"kết quả rất tốt đẹp\", theo Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng."));
arrPost.push(new creaetPost("Kết quả giới thiệu Trung ương khóa mới 'rất tốt đẹp'", "https://i1-vnexpress.vnecdn.net/2020/10/09/tbt-8732-1602221792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=HeDpbXbFXpU8q5WfXCB-tg", "Việc biểu quyết giới thiệu nhân sự Trung ương khóa mới đã đạt \"kết quả rất tốt đẹp\", theo Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng."));
arrPost.push(new creaetPost("Kết quả giới thiệu Trung ương khóa mới 'rất tốt đẹp'", "https://i1-vnexpress.vnecdn.net/2020/10/09/tbt-8732-1602221792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=HeDpbXbFXpU8q5WfXCB-tg", "Việc biểu quyết giới thiệu nhân sự Trung ương khóa mới đã đạt \"kết quả rất tốt đẹp\", theo Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng."));
arrPost.push(new creaetPost("Kết quả giới thiệu Trung ương khóa mới 'rất tốt đẹp'", "https://i1-vnexpress.vnecdn.net/2020/10/09/tbt-8732-1602221792.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=HeDpbXbFXpU8q5WfXCB-tg", "Việc biểu quyết giới thiệu nhân sự Trung ương khóa mới đã đạt \"kết quả rất tốt đẹp\", theo Tổng Bí thư, Chủ tịch nước Nguyễn Phú Trọng."));

function creaetPost(title, linkImage, description) {
    this.title = title;
    this.linkImage = linkImage;
    this.description = description;
    this.createAt = new Date();
}

export default Main;