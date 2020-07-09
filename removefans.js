function removeFan() {
	fans = document.querySelectorAll("li[node-type=userItem]")
	console.log(fans.length)
	flag = false;
	for (var i = 0; i < fans.length; i++) {
		if (Number(fans[i].querySelectorAll("span em.count")[2].innerText) < 3) {  // 移除微博数小于3的粉丝
			fans[i].querySelector("a.tlink[action-type=removeFan]").click();
			document.querySelector("a.W_btn_a[action-type=ok]").click();
			flag = true;
			break;
		}
	}
	if (!flag) {
		clearInterval(timer);
		next = document.querySelector(".page.next.S_txt1.S_line1")
		if (next) {next.click(); setTimeout("timer = setInterval(removeFan, 1000);", 5000)}
	}
}
var timer = setInterval(removeFan, 1000);
