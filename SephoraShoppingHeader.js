({
	openMenu : function(component, event, helper) {
		var elementsHide = document.getElementsByClassName('shopMenuMobileBtn');
        elementsHide[0].style.display = 'none';
        
        var elementsShow = document.getElementsByClassName('shopMenuOuter');
        elementsShow[0].style.display = 'block';
        
        var elementsShow2 = document.getElementsByClassName('shopMenuMobileHideBtn');
        elementsShow2[0].style.display = 'block';
	},
    
    hideMenu : function(component, event, helper) {
		var elementsHide = document.getElementsByClassName('shopMenuMobileHideBtn');
        elementsHide[0].style.display = 'none';
        
        var elementsHide2 = document.getElementsByClassName('shopMenuOuter');
        elementsHide2[0].style.display = 'none';
        
        var elementsShow = document.getElementsByClassName('shopMenuMobileBtn');
        elementsShow[0].style.display = 'block';
	}
})
