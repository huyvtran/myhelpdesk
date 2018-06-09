webpackJsonp([3],{51:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(0),__webpack_require__(2),__webpack_require__(39),__webpack_require__(52),__webpack_require__(7)],void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=function($,_,socketClient,md,helpers){function onRemoveAttachmentClick(e){var self=$(e.currentTarget);if(_.isUndefined(self))return!0;var ticketId=$("#__ticketId").html(),attachmentId=self.attr("data-attachmentId");attachmentId.length>0&&ticketId.length>0&&$.ajax({url:"/api/v1/tickets/"+ticketId+"/attachments/remove/"+attachmentId,type:"DELETE",success:function(){socketClient.ui.refreshTicketAttachments(ticketId)},error:function(err){var res=err.responseJSON;console.log("[trudesk:singleTicket:onRemoveAttachmentClick] - "+res.error),helpers.UI.showSnackbar(res.err,!0)}})}function onRemoveCommentClick(e){var self=$(e.currentTarget);if(_.isUndefined(self))return!0;var ticketId=$("#__ticketId").html(),commentId=self.attr("data-commentId");commentId.length>0&&ticketId.length>0&&socketClient.ui.removeComment(ticketId,commentId)}function onEditCommentClick(e){var self=$(e.currentTarget);if(_.isUndefined(self))return!0;var commentId=self.attr("data-commentId");if(commentId.length>0){var commentForm=$('.edit-comment-form[data-commentid="'+commentId+'"]');if(commentForm.length<1)return!0;var commentText=$('.ticket-comment[data-commentid="'+commentId+'"]').find(".issue-text").find(".comment-body"),commentHtml=commentText.html();_.isUndefined(commentHtml)||(commentHtml=commentHtml.trim(),commentHtml=md(commentHtml),commentForm.find("textarea").val(commentHtml)),commentText.addClass("hide"),commentForm.removeClass("hide")}}function onEditNoteClick(e){var self=$(e.currentTarget);if(_.isUndefined(self))return!0;var noteId=self.attr("data-noteId");if(noteId.length>0){var noteForm=$('.edit-note-form[data-noteid="'+noteId+'"]');if(noteForm.length<1)return!0;var noteText=$('.ticket-note[data-noteid="'+noteId+'"]').find(".issue-text").find(".comment-body"),noteHtml=noteText.html();_.isUndefined(noteHtml)||(noteHtml=noteHtml.trim(),noteHtml=md(noteHtml),noteForm.find("textarea").val(noteHtml)),noteText.addClass("hide"),noteForm.removeClass("hide")}}function onRemoveNoteClick(e){var self=$(e.currentTarget);if(_.isUndefined(self))return!0;var ticketId=$("#__ticketId").html(),noteId=self.attr("data-noteid");noteId.length>0&&ticketId.length>0&&socketClient.ui.removeNote(ticketId,noteId)}function onEditIssueClick(){var issueForm=$(".edit-issue-form"),issueText=$(".initial-issue").find(".issue-text").find(".issue-body");issueText.hasClass("hide")||(issueText.addClass("hide"),issueForm.removeClass("hide"))}var st={};return st.init=function(callback){$(document).ready(function(){socketClient.chat.updateOnlineBubbles(),helpers.setupTruTabs($(".tru-tab-selectors").find(".tru-tab-selector")),$(".remove-attachment").each(function(){var self=$(this);self.off("click",onRemoveAttachmentClick),self.on("click",onRemoveAttachmentClick)}),$(".remove-comment").each(function(){var self=$(this);self.off("click",onRemoveCommentClick),self.on("click",onRemoveCommentClick)}),$(".edit-comment").each(function(){var self=$(this);self.off("click",onEditCommentClick),self.on("click",onEditCommentClick)}),$(".remove-note").each(function(){var self=$(this);self.off("click",onRemoveNoteClick),self.on("click",onRemoveNoteClick)}),$(".edit-note").each(function(){var self=$(this);self.off("click",onEditNoteClick),self.on("click",onEditNoteClick)}),$(".edit-issue").each(function(){var self=$(this);self.off("click",onEditIssueClick),self.on("click",onEditIssueClick)});var issueText=$(".issue-text").find("div.issue-body").html();_.isUndefined(issueText)||(issueText=md(issueText),issueText=issueText.trim(),$("#issueText").val(issueText));var editCommentForm=$("div.edit-comment-form");editCommentForm.find("form").each(function(idx,f){var form=$(f);form.unbind("submit"),form.submit(function($event){if($event.preventDefault(),!form.isValid(null,null,!1))return!0;var id=$("#__ticketId").html();if(id.length>0){var comment=$($event.currentTarget).find("textarea#commentText").val(),commentId=$($event.currentTarget).attr("data-commentId");comment="<p>"+comment+"</p>",socketClient.ui.setCommentText(id,commentId,comment)}})}),editCommentForm.find(".resetForm").each(function(idx,item){var button=$(item);button.off("click"),button.on("click",function($event){$event.preventDefault();var grandParent=button.parents("div.edit-comment-form"),comment=button.parents("div.ticket-comment").find(".comment-body");grandParent.length>0&&(grandParent.addClass("hide"),comment.removeClass("hide"))})});var editNoteForm=$("div.edit-note-form");if(editNoteForm.find("form").each(function(idx,f){var form=$(f);form.off("submit"),form.on("submit",function($event){if($event.preventDefault(),!form.isValid(null,null,!1))return!0;var id=$("#__ticketId").text();if(id.length>0){var note=$($event.currentTarget).find("textarea#noteText").val(),noteId=$($event.currentTarget).attr("data-noteId");note="<p>"+note+"</p>",socketClient.ui.setNoteText(id,noteId,note)}})}),editNoteForm.find(".resetForm").each(function(idx,item){var button=$(item);button.off("click"),button.on("click",function($event){$event.preventDefault();var grandParent=button.parents("div.edit-note-form"),note=button.parents("div.ticket-note").find(".comment-body");grandParent.length>0&&(grandParent.addClass("hide"),note.removeClass("hide"))})}),"function"==typeof callback)return callback()})},st}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}});