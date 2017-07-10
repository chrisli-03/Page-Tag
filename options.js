// Saves options to chrome.storage.sync.
function save_options() {
    var peekbox = document.getElementById('peek').checked;
    var hidebox = document.getElementById('hide').checked;
    chrome.storage.sync.set({
        peekbox: peekbox,
        hidebox: hidebox
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
            window.close();
        }, 500);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        peekbox: true,
        hidebox: true
    }, function(items) {
        document.getElementById('peek').checked = items.peekbox;
        document.getElementById('hide').checked = items.hidebox;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);