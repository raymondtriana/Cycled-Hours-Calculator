/*
i32 f32         f32         f32
Day Hrs_Worked	Cycle_Hours	Total_Hrs_avail_tomorrow	
1	[10]        70          [60](b-c)	
2	8			
3	9			
4	10			
5	7			
6	9			
7	10			
8	8                       d+(day-7[b])
9	4                       12
10	12			
11				
12	Hour:Minutes			
13				
14				

*/

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use tauri::{AppHandle, Manager};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(app:AppHandle,name: &str) -> String {
    app.emit_all("event_name", "event_payload").unwrap();
    return format!("Hello, {}! You've been greeted from Rust!", name);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
