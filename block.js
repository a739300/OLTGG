try {
	Entry.getMainWS();
}
catch {
	window.Entry = document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.Entry;
	window.EntryStatic = document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.EntryStatic;
}
const LibraryCreator = {
	start: (blocksJSON, category, text) => {
		let blockArray = new Array;
		// LibraryCreator 가져오기
		Entry.staticBlocks = [
			{
				category: 'start',
				blocks: [
					'when_run_button_click',
					'when_some_key_pressed',
					'mouse_clicked',
					'mouse_click_cancled',
					'when_object_click',
					'when_object_click_canceled',
					'when_message_cast',
					'message_cast',
					'message_cast_wait',
					'when_scene_start',
					'start_scene',
					'start_neighbor_scene',
					'check_object_property',
					'check_block_execution',
					'switch_scope',
					'is_answer_submited',
					'check_lecture_goal',
					'check_variable_by_name',
					'show_prompt',
					'check_goal_success',
					'positive_number',
					'negative_number',
					'wildcard_string',
					'wildcard_boolean',
					'register_score',
				],
			},
			{
				category: 'flow',
				blocks: [
					'wait_second',
					'repeat_basic',
					'repeat_inf',
					'repeat_while_true',
					'stop_repeat',
					'_if',
					'if_else',
					'wait_until_true',
					'stop_object',
					'restart_project',
					'when_clone_start',
					'create_clone',
					'delete_clone',
					'remove_all_clones',
				],
			},
			{
				category: 'moving',
				blocks: [
					'move_direction',
					'bounce_wall',
					'move_x',
					'move_y',
					'move_xy_time',
					'locate_x',
					'locate_y',
					'locate_xy',
					'locate_xy_time',
					'locate',
					'locate_object_time',
					'rotate_relative',
					'direction_relative',
					'rotate_by_time',
					'direction_relative_duration',
					'rotate_absolute',
					'direction_absolute',
					'see_angle_object',
					'move_to_angle',
				],
			},
			{
				category: 'looks',
				blocks: [
					'show',
					'hide',
					'dialog_time',
					'dialog',
					'remove_dialog',
					'change_to_some_shape',
					'change_to_next_shape',
					'add_effect_amount',
					'change_effect_amount',
					'erase_all_effects',
					'change_scale_size',
					'set_scale_size',
					'flip_x',
					'flip_y',
					'change_object_index',
				],
			},
			{
				category: 'brush',
				blocks: [
					'brush_stamp',
					'start_drawing',
					'stop_drawing',
					'set_color',
					'set_random_color',
					'change_thickness',
					'set_thickness',
					'change_brush_transparency',
					'set_brush_tranparency',
					'brush_erase_all',
				],
			},
			{
				category: 'text',
				blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
			},
			{
				category: 'sound',
				blocks: [
					'sound_something_with_block',
					'sound_something_second_with_block',
					'sound_from_to',
					'sound_something_wait_with_block',
					'sound_something_second_wait_with_block',
					'sound_from_to_and_wait',
					'sound_volume_change',
					'sound_volume_set',
					'sound_silent_all',
				],
			},
			{
				category: 'judgement',
				blocks: [
					'is_clicked',
					'is_press_some_key',
					'reach_something',
					'boolean_basic_operator',
					'boolean_and_or',
					'boolean_not',
				],
			},
			{
				category: 'calc',
				blocks: [
					'calc_basic',
					'calc_rand',
					'coordinate_mouse',
					'coordinate_object',
					'get_sound_volume',
					'quotient_and_mod',
					'calc_operation',
					'get_project_timer_value',
					'choose_project_timer_action',
					'set_visible_project_timer',
					'get_date',
					'distance_something',
					'get_sound_duration',
					'get_user_name',
					'length_of_string',
					'combine_something',
					'char_at',
					'substring',
					'index_of_string',
					'replace_string',
					'change_string_case',
				],
			},
			{
				category: 'variable',
				blocks: [
					'variableAddButton',
					'listAddButton',
					'ask_and_wait',
					'get_canvas_input_value',
					'set_visible_answer',
					'get_variable',
					'change_variable',
					'set_variable',
					'show_variable',
					'hide_variable',
					'value_of_index_from_list',
					'add_value_to_list',
					'remove_value_from_list',
					'insert_value_to_list',
					'change_value_list_index',
					'length_of_list',
					'is_included_in_list',
					'show_list',
					'hide_list',
				],
			},
			{
				category: 'func',
				blocks: ['functionAddButton'],
			},
			{
				category: 'analysis',
				blocks: [
					'analizyDataAddButton',
					'append_row_to_table',
					'insert_row_to_table',
					'delete_row_from_table',
					'set_value_from_table',
					'get_table_count',
					'get_value_from_table',
					'calc_values_from_table',
					'open_table_chart',
					'close_table_chart',
				],
			},
			{
				category: 'ai_utilize',
				blocks: [
					'aiUtilizeBlockAddButton',
					'aiUtilizeModelTrainButton',
					'audio_title',
					'check_microphone',
					'speech_to_text_convert',
					'speech_to_text_get_value',
					'get_microphone_volume',
					'tts_title',
					'read_text',
					'read_text_wait_with_block',
					'set_tts_property',
					'translate_title',
					'get_translated_string',
					'check_language',
					'video_title',
					'video_draw_webcam',
					'video_check_webcam',
					'video_flip_camera',
					'video_set_camera_opacity_option',
					'video_motion_value',
					'video_toggle_model',
					'video_is_model_loaded',
					'video_number_detect',
					'video_toggle_ind',
					'video_body_part_coord',
					'video_face_part_coord',
					'video_detected_face_info',
				],
			},
			{
				category: 'expansion',
				blocks: [
					'expansionBlockAddButton',
					'weather_title',
					'check_weather',
					'check_finedust',
					'get_weather_data',
					'get_current_weather_data',
					'get_today_temperature',
					'check_city_weather',
					'check_city_finedust',
					'get_city_weather_data',
					'get_current_city_weather_data',
					'get_today_city_temperature',
					'festival_title',
					'count_festival',
					'get_festival_info',
					'behaviorConductDisaster_title',
					'count_disaster_behavior',
					'get_disaster_behavior',
					'behaviorConductLifeSafety_title',
					'count_lifeSafety_behavior',
					'get_lifeSafety_behavior',
				],
			},
			{
				category: 'arduino',
				blocks: [
					'arduino_reconnect',
					'arduino_open',
					'arduino_cloud_pc_open',
					'arduino_connect',
					'arduino_download_connector',
					'download_guide',
					'arduino_download_source',
					'arduino_noti',
				].concat(EntryStatic.DynamicHardwareBlocks),
			}
		];
		EntryStatic.getAllBlocks = () => {
			return Entry.staticBlocks;
		}
		function updateCategory(category, options) {
			Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                { category: category, visible: true },
				{ category: 'start', visible: true },
				{ category: 'flow', visible: true },
				{ category: 'moving', visible: true },
				{ category: 'looks', visible: true },
				{ category: 'brush', visible: true },
				{ category: 'text', visible: true },
				{ category: 'sound', visible: true },
				{ category: 'judgement', visible: true },
				{ category: 'calc', visible: true },
				{ category: 'variable', visible: true },
				{ category: 'func', visible: true },
				{ category: 'analysis', visible: true },
				{ category: 'ai_utilize', visible: true },
				{ category: 'expansion', visible: true },
				{ category: 'arduino', visible: true }
			]);
			for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
				if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
					$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
				}
			}
			Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
			Entry.playground.blockMenu._generateCategoryCode(category);
			if (options) {
				if (options.background) {
					$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
					$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
					if (options.backgroundSize) {
						$(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
					}
				}
				if (options.name) {
					$(`#entryCategory${category}`)[0].innerText = options.name;
				}
			}
		}
		function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
			Entry.block[blockname] = {
				color: color.color,
				fontColor: color.font,
				outerLine: color.outline,
				skeleton: skeleton,
				statement: [],
				params: params.params,
				events: {},
				def: {
					params: params.define,
					type: blockname
				},
				paramsKeyMap: params.map,
				class: _class ? _class : 'default',
				func: func,
				template: template
			}
		}
		// 블록 추가하기
		for (let i in blocksJSON) {
			let block = blocksJSON[i];
			blockArray.push(block.name);
			addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton);
		}
		// 블록 반영
		Entry.staticBlocks.push({ category: category, blocks: blockArray });
		// 카테고리 업데이트 (ws에서만)
		if (Entry.getMainWS()) {
			updateCategory(category);
			// 아이콘 적용
			$('head').append(`<style>#entryCategory${category}{background-image:url(https://raw.githack.com/a739300/OLTGG/main/images/icon.svg);background-repeat:no-repeat;margin-bottom:1px;background-position-y: 10px;background-size: 20px;}.entrySelectedCategory#entryCategory${category}{background-image:url(https://raw.githack.com/a739300/OLTGG/main/images/icon_selected.svg);background-color:#000000;border-color:##000000;color:#fff}</style>`);
			// 카테고리 이름 적용;
			$(`#entryCategory${category}`).append(text);
		}
	}
}
// 클립보드 복사 함수
function copy(val) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = val;
	dummy.select();
	try {
		document.execCommand("copy");
	}
	catch {
		alert('복사하기를 지원하지 않습니다.');
	}
	finally {
		document.body.removeChild(dummy);
	}
}
const blocks = [
    {
		name: 'OLTGGTitle',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Main Toggle',
				color: EntryStatic.colorSet.common.TEXT,
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
    {
		name: 'ToggleB',
		template: 'Input %1 Output %2 Toggle %3',
		skeleton: 'basic_string_field',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['Input']
			},
			{
				type: 'text',
				params: ['Output']
			},
			null
		],
		map: {
			InputValue: 0,
			ResultValue: 1,
		},
		class: 'text',
		func: async (sprite, script) => {
            var inputV = script.getValue('InputValue', script);
            var ResultV = script.getValue('ResultValue', script);
                
            if(inputV == '1'){
                if(temp == 0){
                    if(Output == '1'){
                        temp = 1;
                        console.log("Return 0");
			Output = 0;
                        return 0;
                    }
                    if(Output == '0'){
                        temp = 1;
                        console.log("Return 1");
			Output = 1;
                        return 1;
                    }
                }
            }

            if(inputV == '0'){
                temp = 0;
                console.log("Return R");
                var RI = script.getNumberValue('ResultValue', script);
		Output = Output;
                return RI;
            }
            
		},
	},
    {
		name: 'OLTGGV',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'OLTGG V0.1',
				color: EntryStatic.colorSet.common.TEXT,
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	}
]
// 블럭 불러오기
LibraryCreator.start(blocks, 'API', 'OLTGG');
// 리뉴얼 이전 장면 1 로드 함수
async function ExpressBlockLoad() {
	if(Entry.getMainWS() && Entry.projectId) {
		const TempProjectId = Entry.projectId;
		const ExportedProject = Entry.exportProject();
		const ProjectData = await (await fetch(`https://playentry.org/api/project/${Entry.projectId}`)).json();
		Entry.clearProject();
		Entry.loadProject(Object.keys(ExportedProject).reduce((acc, cur) => {
			acc[cur] = ProjectData[cur];
			return acc;
		}, {}));
		Entry.projectId = TempProjectId;
	}
}
// 리뉴얼 이후 장면 1 로드 함수
async function ExpressBlockLoadNew() {
	if(Entry.getMainWS() && Entry.projectId) {
		const TempProjectId = Entry.projectId;
		const ExportedProject = Entry.exportProject();
		const ProjectData = (await (await await fetch('https://playentry.org/graphql', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				query:
				` query SELECT_PROJECT($id: ID! $groupId: ID) {
					project(id: $id, groupId: $groupId) {
						id
						name
						user {
							id
							nickname
							username
							profileImage {
								id
								name
								label {
									ko
									en
									ja
									vn
								}
								filename
								imageType
								dimension {
									width
									height
								}
								trimmed {
									filename
									width
									height
								}
							}
							status {
								following
								follower
							}
							description
							role
						}
						visit
						speed
						objects
						variables
						cloudVariable
						messages
						functions
						tables
						scenes
						thumb
						isopen
						blamed
						isPracticalCourse
						category
						categoryCode
						created
						updated
						shortenUrl
						parent {
							id
							name
							user {
								id
								username
								nickname
							}
						}
						likeCnt
						favorite
						special
						isForLecture
						isForStudy
						isForSubmit
						hashId
						complexity
						staffPicked
						ranked
						submitId {
							id
						}
						description
						description2
						description3
						hasRealTimeVariable
						realTimeVariable {
							variableType
							key
							value
							array {
								key
								data
							}
							minValue
							maxValue
							visible
							x
							y
							width
							height
							object
						}
						commentGroup {
							group
							count
						}
						likeCntGroup {
							group
							count
						}
						visitGroup {
							group
							count
						}
						recentGroup {
							group
							count
						}
						learning
						expansionBlocks
						aiUtilizeBlocks
						childCnt
					}
				}
				`,
				variables: { id: TempProjectId }
			})
		})).json()).data.project;
		Entry.clearProject();
		Entry.loadProject(Object.keys(ExportedProject).reduce((acc, cur) => {
			acc[cur] = ProjectData[cur];
			return acc;
		}, {}));
		Entry.projectId = TempProjectId;
	}
}
var temp;
var Output = 0;
ExpressBlockLoadNew();
console.log('<b>인천해커톤SW캠프용 OLTGG(OnlyToggle) 비공식 확장블럭 기능입니다.</b>');
