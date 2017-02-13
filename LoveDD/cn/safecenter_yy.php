<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>安全中心-验证手机</title>
    <link rel="icon" href="../images/logo-icon.png"type="image/x-icon">
    <link rel="stylesheet" href="../css/reset.css" type="text/css">
    <link rel="stylesheet" href="../css/common.css" type="text/css">
    <link rel="stylesheet" href="../css/personal_style.css" type="text/css">
</head>
<body>
   	<div class="wrap">
        <?php
            include("head.html");
        ?>
		<div class="main">
            <div class="password-dgf">
                <div class="password-set">
                    <h2>验证手机</h2>
                </div>
                <form claee="dgf-phone-put" action="" class="clearfix">
                    <div class="phone-com">
                        <label for="">新手机号码</label>
                        <div class="new-phone-dgf">
                            <input type="text" name="" placeholder="新手机号码">
                        </div>
                        <strong class="phone-cover"></strong>
                        <em class="phone-tips">手机号码错误！</em>
                    </div>
                    <div class="phone-com">
                        <label for="">验证码</label>
                        <div class="verification-dgf">
                            <input type="text" name="" placeholder="验证码">
                        </div>
                        <strong class="code-cover"></strong>
                        <span class="verification-btn">发送验证码</span>
                        <em>验证码错误！</em>
                    </div>
                    <a class="submit-dgf">提交</a>
                    <a href="personal_center.php" class="return-dgf">返回</a>
                </form>
            </div>
        </div>
		<?php
			include("foot.html");
		?>
   	</div>
    <script charset="utf-8" src="../js/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script charset="utf-8" src="../js/common.js" type="text/javascript"></script>
    <script charset="utf-8" src="../js/other.js" type="text/javascript"></script>
</body>
</html>