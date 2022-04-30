<template>
	<header>
		<template v-if="isUserlogin">	
		<h1><router-link to="/"><img alt="Vue logo" src="../assets/logo.png" width="80"></router-link></h1>
		<div class="menuWrap">
			<span>vuex 에서 가져온 username : {{$store.state.userid}}</span> 
			<ul class="menu">
				<li><router-link to="/board/list">게시판</router-link></li>
				<li><a href="javascript:;" @click="logoutUser">로그아웃</a></li>
			</ul>
		</div>
		</template>
	<template v-else>	
		<h1><router-link to="/"><img alt="Vue logo" src="../assets/logo.png" width="80"></router-link></h1>
		<div class="menuWrap">
			<span> 로그인안햇을때vuex 에서 가져온 username : {{$store.state.userid}}</span> 
			<ul class="menu">
				<li><router-link to="/board/list">게시판</router-link></li>
				<li><router-link to="/board/register">회원가입</router-link></li>
				<li><router-link to="/board/login">로그인</router-link></li>
				<li><a href="javascript:;" @click="logoutUser">로그아웃</a></li>
			</ul>
		</div>
		</template>
	</header>
</template>

<script>
export default {
	data(){
		return{
            
		}
	},
	computed:{
		isUserlogin(){
			return this.$store.getters.isLogin;
		}
	},
	methods:{
		logoutUser(){
			alert("로그아웃합니다");
			this.$store.commit('clearUser');
			//현재주소와 이동할 주소를 비교해서 실행
			if(this.$route.path!=='/') this.$router.push('/')
			
			
		}
	}
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>