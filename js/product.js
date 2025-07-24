// js/product.js
$(document).ready(function() {
    console.log("상품 페이지 스크립트 로드됨.");

    // 썸네일 클릭 시 메인 이미지 변경
    $('.picture .thumb').on('click', function() {
        // 모든 썸네일에서 'active' 클래스 제거
        $('.picture .thumb').removeClass('active');
        // 클릭된 썸네일에 'active' 클래스 추가
        $(this).addClass('active');

        // 메인 이미지의 src를 클릭된 썸네일의 data-src 값으로 변경
        var newImageSrc = $(this).data('src');
        $('#pic_view').attr('src', newImageSrc);
    });

    // 가격 계산은 서버 연동이 필요하므로 가짜 함수로 대체
    function updatePrice() {
        alert("가격 정보는 서버와의 연동이 필요하여, 현재는 고정된 가격만 표시됩니다.");
        // 실제로는 여기서 옵션 값을 가져와 AJAX로 서버에 가격을 요청해야 합니다.
    }

    // 옵션 변경 시 가격 업데이트 함수 호출 (현재는 alert만 발생)
    $('.options select').on('change', function() {
        // 동적인 가격 계산 대신 간단한 메시지 표시
        // $('#sale_price').text( (Math.random() * (50 - 20) + 20).toFixed(3) + ' 원' ); // 랜덤 가격 예시
        console.log("옵션이 변경되었습니다. 실제 가격 계산은 서버가 필요합니다.");
    });
});
