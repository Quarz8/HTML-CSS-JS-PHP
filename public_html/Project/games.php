<!DOCTYPE html>
<html>
<head>
        <link rel='stylesheet' href='page_css.css'>

        <title> Student's Hangout </title>
</head>
<body>
                <table cellpadding='3' cellspacing='3' class='tab_main'>
                        <!--Logo-->
                        <tr>
                                <td  colspan='5'><img src='images/logo.png' height='65%' width='100%' ></td> <!--1350x160-->
                        </tr>
                        <!--Nav_Tabs-->
                        <tr align='center' bgcolor='lightgrey' class='td_bor'>
                                <td width='5%'> <a href='user_page.php'> Home </a></td>
                                <td width='5%'> <a href='send_message.php'> Send Message </a></td>
                                <td width='5%'> <a href='inbox.php'> Inbox (Only Recent Message) </a></td>
                                <td width='5%'> <a href='view_profile.php'> View Profile </a></td>
                                <td width='5%'> <a href='signout.php'> Signout </a></td>
                        </tr>

						<tr>
                                <td> <hr> </td>
                                <td> <hr> </td>
                                <td> <hr> </td>
                                <td> <hr> </td>
                                <td> <hr> </td>
                        </tr>

                        <tr>

                                <td colspan='5' align='center'>
					<h1>Shadow Tag</h1>
					<p>Use WASD to avoid the shadows.<br>The gold one is especially dangerous.
					<br>Click to start and survive for as long as you can.<br>Good luck!</p>
					<main>
						<canvas></canvas>
					</main>
					<section>Score: <span id = 'myScore'></span></section>
					<script src=shadow_tag.js></script>
                                </td>
<!--
				<td colspan='3'>
					<h1>Highscores</h1>
					<table class='highscore_table'>
						<tr>
						<td>name1</td><td>score1</td>
						</tr>
						<tr>
						<td>name2</td><td>score2</td>
                                                </tr>
                                                <tr>
                                                <td>name3</td><td>score3</td>
                                                </tr>
                                                <tr>
                                                <td>name4</td><td>score4</td>
                                                </tr>
                                                <tr>
                                                <td>name5</td><td>score5</td>
                                                </tr>
					</table>
                			<section><input type='button' onclick='' value='Update Highscores'></section>
				</td> -->
			</tr>
                </table>
                        <footer align='center'>
                        &copy; All Rights Reserved.
                        <br><a href="https://github.com/abhn/simple-php-mysql-project" target="_blank">Original Developer's Github</a>
                        </footer>
</body>
</html>
