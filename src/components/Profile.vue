<template>
<div>
	<div class="header-inner">
      <h2 id="content-main-heading">Account</h2>
      <p class="subheader">Change your basic account.</p>
    </div>
      <div id="username_fieldset" class="control-group">
        <label for="user_screen_name" class="t1-label control-label">Username</label>
        <div class="controls">
          <p id="username_notification" class="notification"></p>
          <input id="user_screen_name" maxlength="15" name="user[screen_name]" type="text" value="Sappunts">
          <p class="notification">https://twitty.io/<span id="username_path">Sappunts</span></p>
        </div>
      </div>
        <button id="settings_save" class="btn primary-btn" type="submit">Save changes</button>
            <hr>
    <div class="content-header">
    <div class="header-inner">
      <h2 id="content-main-heading">Password</h2>
      <p class="subheader">Change your password or recover your current one.</p>
    </div>
  </div>
      <div class="control-group">
        <label for="current_password" class="t1-label control-label">Current password</label>
        <div class="controls">
          <input id="current_password" type="password" name="current_password">
        </div>
      </div>
      <div id="password-match-pair">
  <div class="control-group">
    <label for="user_password" class="t1-label control-label">New password</label>
    <div id="password_strength" class="controls">
      <input id="user_password" type="password" name="user_password">
      <small id="password_strength_feedback" class="help-inline help-error" style="display: none;"></small>
    </div>
  </div>
  <div class="control-group">
    <label for="user_password_confirmation" class="t1-label control-label">Verify password</label>
    <div class="controls">
      <input id="user_password_confirmation" type="password" name="user_password_confirmation">
    </div>
  </div>
</div>
      <hr>
      <div>
  <button id="settings_save" class="btn primary-btn" type="submit">Save changes</button>
</div>
    </form>
  </div>
</div>
</template>