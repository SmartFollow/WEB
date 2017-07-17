<main id="main">
  <div class="overlay"></div>
  <header class="header">
    <h1 class="page-title"><a class="sidebar-toggle-btn trigger-toggle-sidebar"><span class="line"></span><span class="line"></span><span class="line"></span><span class="line line-angle1"></span><span class="line line-angle2"></span></a>Messagerie<a></a></h1>
  </header>
  <div class="action-bar">
    <ul class="no-bullets">
      <li><a class="icon circle-icon glyphicon glyphicon-plus" ng-click="displayCreateConversation()"></a></li>
      <li><a class="icon circle-icon red glyphicon glyphicon-remove" ng-click="deleteConversation()"></a></li>
    </ul>
  </div>
  <div id="main-nano-wrapper" class="nano">
    <div class="nano-content">
      <ul class="message-list">
        <li id="create_conversation" style="display:none;">
          <div class="col col-1"><span class="dot"></span>
            <p class="title" style="margin-top: 4px;z-index: 1;">
                  <tags-input ng-model="tags" min-length="1" max-length="3" display-property="id" placeholder="Participants id" allowed-tags-pattern="^[0-9]+$">
                  </tags-input>
            </p>
          </div>
          <div class="col col-2">
            <div class="subject" style="margin-top: 9px;"><input type="text" class="form-control" placeholder="Sujet" id="subject"></div>
            <div class="date"><button type="button" class="btn btn-secondary" ng-click="createConversation()">Créer</button></div>
          </div>
        </li>
        <li class="unread" id="{{conversation.id}}" ng-repeat="conversation in conversations | orderBy:'-'" ng-init="$last && loadMyScript()">
          <div class="col col-1"><span class="dot"></span>
            <div class="checkbox-wrapper">
              <input type="checkbox" id="chk1">
              <label for="chk1" class="toggle" style="margin-bottom: 0px;"></label>
            </div>
            <p class="title"><span ng-if="user.id != participant.id" ng-repeat="participant in conversation.participants">{{participant.firstname}} {{participant.lastname}}<span ng-if="!$last">, </span></span></p>
          </div>
          <div class="col col-2">
            <div class="subject">{{conversation.subject}}</div>
            <div class="date">{{formatDate(conversation.updated_at) | date:'HH:mm MM-dd'}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</main>
<div id="message">
  <div class="header">
    <h1 class="page-title"><a class="icon circle-icon glyphicon glyphicon-chevron-left trigger-message-close"></a>Message<span style="display:none" id="conversation_id">{{messages.id}}</span></h1>
    <p>Participants: <span ng-repeat="participant in messages.participants"><a href="">{{participant.firstname}} {{participant.lastname}}</a><span ng-if="!$last">, </span></span>, Créer le {{formatDate(messages.created_at) | date:'medium'}}</p>
  </div>
  <div id="message-nano-wrapper" class="nano">
    <div class="nano-content">
      <ul class="message-container no-bullets">
        <li>
          <div class="details">
            <div class="left">Message</div>
          </div>
          <div class="message"><textarea class="form-control" rows="5" id="msg_content"></textarea></div>
          <div class="tool-box"><a href="" class="circle-icon small glyphicon glyphicon-share-alt" ng-click="sendMessage()"></a></div>
        </li>
        <li class="sent" ng-repeat="message in messages.messages | orderBy:'$index':true">
          <div class="details">
            <div class="left"><span ng-if="message.creator_id == participant.id" ng-repeat="participant in messages.participants">{{participant.firstname}} {{participant.lastname}}</span>
              <div class="arrow"></div><span ng-if="message.creator_id != participant.id" ng-repeat="participant in messages.participants">{{participant.firstname}} {{participant.lastname}}<span ng-if="!$last">, </span></span>
            </div>
            <div class="right">{{formatDate(message.updated_at) | date:'medium'}}</div>
          </div>
          <div class="message">{{message.content}}</div>
          <div class="tool-box"><a href="" class="circle-icon small glyphicon glyphicon-share-alt"></a><a href="" class="circle-icon small red-hover glyphicon glyphicon-remove"></a><a href="" class="circle-icon small red-hover glyphicon glyphicon-flag"></a></div>
        </li>
      </ul>
    </div>
  </div>
</div>