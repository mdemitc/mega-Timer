QUnit.test( 'New Timer Test', function( assert ) {
	var timer = new Timer('Test timer');
	assert.ok( timer.state === 'paused', 'State Passed!' );
	assert.ok( timer.title === 'Test timer', 'Title Passed!' );
});

QUnit.test( '_switchState Test', function( assert ) {
	var timer = new Timer('Test timer');
	timer._switchState('active');
	assert.ok( timer.state === 'active', 'Active Passed!' );
	timer._switchState('finished');
	assert.ok( timer.state === 'finished', 'Finished Passed!' );
	timer._switchState('paused');
	assert.ok( timer.state === 'paused', 'Paused Passed!' );
});

QUnit.test( 'start function Test', function( assert ) {
	var timer = new Timer('Test timer');
	timer.start();
	assert.ok( timer.state === 'active', 'Start active Passed!' );
	assert.ok( timer.state === 'paused', 'Start paused Passed!' );
	
});

QUnit.test( 'stop function Test', function( assert ) {
	var timer = new Timer('Test timer');
	timer.pause();
	assert.ok( timer.state === 'paused', 'Paused Passed!' );
	
});