<template>
  <div>
  <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <ul class="navbar-brand ">Twitty</ul>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/" class="glyphicon glyphicon-home"> Home</router-link></li>
            <li><router-link to="/messages" class="glyphicon glyphicon-envelope"> Messages</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
           <li>
           	<form class="navbar-form" role="search">
        		<div class="input-group">
            		<input type="text" class="form-control" placeholder="Search" name="q">
           			 <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
           </li>
            <li class="dropdown">
    			<a href="#" class="dropdown-toggle" data-toggle="dropdown">
			    <img src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-1/p32x32/14022142_10201915670370505_2460713328837671063_n.jpg?oh=bc23e9ca001a8a53c38d63767d025445&oe=58BC1B33" class="profile-image img-circle"> Sappunts<b class="caret"></b></a>
			    <ul class="dropdown-menu">
			        <li><router-link to="/profile"><i class="fa fa-cog"></i> Account</router-link></li>
			        <li class="divider"></li>
			        <li><a href="#"><i class="fa fa-sign-out"></i> Sign-out</a></li>
    			</ul>
			</li>
          </ul>
        </div>
      </div>
</nav>
<div class="col-sm-9">
	<router-view></router-view>
</div>
  </div>
</template>

